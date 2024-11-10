import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import { CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../components/AuthContext';

const exercises = [
  {
    id: 1,
    title: 'Hello, World!',
    description: 'Write a Python program that prints "Hello, World!" to the console.',
    initialCode: '# Write your code here\n',
    solution: 'print("Hello, World!")',
    testCases: [
      { input: '', expectedOutput: 'Hello, World!' }
    ],
    points: 10
  },
  {
    id: 2,
    title: 'Sum of Two Numbers',
    description: 'Write a function that takes two numbers as parameters and returns their sum.',
    initialCode: 'def sum_numbers(a, b):\n    # Your code here\n    pass\n\n# Test your function\nprint(sum_numbers(5, 3))',
    solution: 'def sum_numbers(a, b):\n    return a + b\n\nprint(sum_numbers(5, 3))',
    testCases: [
      { input: '5, 3', expectedOutput: '8' },
      { input: '10, -2', expectedOutput: '8' },
      { input: '0, 0', expectedOutput: '0' }
    ],
    points: 20
  },
];

const Exercises: React.FC = () => {
  const [currentExercise, setCurrentExercise] = useState(exercises[0]);
  const [code, setCode] = useState(currentExercise.initialCode);
  const [output, setOutput] = useState('');
  const [testResults, setTestResults] = useState<boolean[]>([]);
  const { user, updateProgress } = useAuth();

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleSubmit = () => {
    // TODO: Implement actual code execution and evaluation
    setOutput(`Output:\n${code}\n\nThis is a placeholder. In a real application, we would execute the code and show the actual output here.`);
    
    // Simulate test case evaluation
    const simulatedResults = currentExercise.testCases.map(() => Math.random() > 0.5);
    setTestResults(simulatedResults);

    // Update user progress if all test cases pass
    if (simulatedResults.every(result => result)) {
      updateProgress(currentExercise.id, undefined, currentExercise.points);
    }
  };

  const handleExerciseChange = (exerciseId: number) => {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    if (exercise) {
      setCurrentExercise(exercise);
      setCode(exercise.initialCode);
      setOutput('');
      setTestResults([]);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Python Exercises</h1>
      <div className="mb-4">
        <label htmlFor="exercise-select" className="block text-sm font-medium text-gray-700">
          Select an exercise:
        </label>
        <select
          id="exercise-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={currentExercise.id}
          onChange={(e) => handleExerciseChange(Number(e.target.value))}
        >
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.title} {user?.progress.completedExercises.includes(exercise.id) ? '✅' : ''}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">{currentExercise.title}</h2>
        <p className="mb-2">{currentExercise.description}</p>
        <p className="text-sm text-gray-600">Points: {currentExercise.points}</p>
      </div>
      <CodeEditor code={code} onChange={handleCodeChange} />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Run Code
      </button>
      {output && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Output:</h3>
          <pre className="bg-gray-100 p-4 rounded">{output}</pre>
        </div>
      )}
      {testResults.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Test Results:</h3>
          <ul>
            {testResults.map((result, index) => (
              <li key={index} className="flex items-center">
                {result ? (
                  <CheckCircle className="text-green-500 mr-2" />
                ) : (
                  <XCircle className="text-red-500 mr-2" />
                )}
                Test Case {index + 1}: {result ? 'Passed' : 'Failed'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Exercises;
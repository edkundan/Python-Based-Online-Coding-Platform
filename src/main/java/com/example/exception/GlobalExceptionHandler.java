package com.example.exception;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleException(Exception ex, Model model) {
        model.addAttribute("error", "Something went wrong!");
        return "error";
    }
    <c:forEach var="error" items="${bindingResult.allErrors}">
    <div class="alert alert-danger">
        ${error.defaultMessage}
    </div>
</c:forEach>
@Test
public void testGetUserByIdNotFound() {
    // Arrange
    when(userRepository.findById(1L)).thenReturn(Optional.empty());

    // Act
    User result = userService.getUserById(1L);

    // Assert
    assertNull(result);  // User should be null if not found
}


}

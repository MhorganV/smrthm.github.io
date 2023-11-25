function submitForm() {
    // You can add form validation here before sending the email.
    // For simplicity, this example assumes the form is always valid.

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var message = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create a mailto link
    var mailtoLink = "mailto:majorelain71@gmail.com" +
        "?subject=" + encodeURIComponent("Message from " + name) +
        "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    // Open the mail client with the pre-filled data
    window.location.href = mailtoLink;
}
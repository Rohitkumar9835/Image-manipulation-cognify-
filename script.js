function showImage(imageUrl) {
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('apply-btn').addEventListener('click', function() {
    // Replace the alert with your desired action, such as redirecting to an application form
    alert('You clicked the Apply Now button!');
});
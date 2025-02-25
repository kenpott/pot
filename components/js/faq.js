function toggleFAQ(img, card_content) {
    img.classList.toggle("active");
    if (img.classList.contains("active")) {
        img.src = "../../assets/down-arrow.svg";
    } else {
        img.src = "../../assets/left-arrow.svg";
    }
    card_content.classList.toggle("active");
}
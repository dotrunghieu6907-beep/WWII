// Dữ liệu các sự kiện lịch sử
const facts = [
    "The Eastern Front accounted for roughly 80% of all German military casualties during World War II.",
    "The Siege of Leningrad (St. Petersburg) lasted for 872 days, resulting in the deaths of over a million civilians primarily due to starvation.",
    "The Soviet T-34 is widely considered one of the most effective, mass-produced, and influential tank designs of the entire war.",
    "Over 30 million people died on the Eastern Front alone, making it the absolute deadliest conflict zone in human history.",
    "Women played a massive combat role in the Soviet military, serving as elite snipers (like Lyudmila Pavlichenko), pilots (the famous 'Night Witches'), and tank drivers.",
    "The severe Russian rasputitsa (mud season) and extreme winter temperatures reaching -40°C heavily crippled German mechanized advances."
];

// Hàm hiển thị fact ngẫu nhiên
function showRandomFact() {
    const factDisplay = document.getElementById('fact-display');
    // Tạo chỉ số ngẫu nhiên dựa trên độ dài của mảng facts
    const randomIndex = Math.floor(Math.random() * facts.length);
    
    // Đưa nội dung văn bản vào thẻ HTML
    factDisplay.innerHTML = `<strong>Did you know?</strong> ${facts[randomIndex]}`;
    
    // Hiển thị phần tử bị ẩn
    factDisplay.style.display = 'block';
}

// Gắn sự kiện click cho nút bấm sau khi trang tải xong
document.getElementById('fact-button').addEventListener('click', showRandomFact);
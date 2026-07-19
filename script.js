// Dữ liệu các sự kiện lịch sử (Đã được bổ sung thêm nhiều fact)
const facts = [
    // Các fact cũ
    "The Eastern Front accounted for roughly 80% of all German military casualties during World War II.",
    "The Siege of Leningrad (St. Petersburg) lasted for 872 days, resulting in the deaths of over a million civilians primarily due to starvation.",
    "The Soviet T-34 is widely considered one of the most effective, mass-produced, and influential tank designs of the entire war.",
    "Over 30 million people died on the Eastern Front alone, making it the absolute deadliest conflict zone in human history.",
    "Women played a massive combat role in the Soviet military, serving as elite snipers (like Lyudmila Pavlichenko), pilots (the famous 'Night Witches'), and tank drivers.",
    "The severe Russian rasputitsa (mud season) and extreme winter temperatures reaching -40°C heavily crippled German mechanized advances.",
    
    // Các fact mới bổ sung
    "The Battle of Kiev in 1941 resulted in the largest encirclement of troops in history, with over 600,000 Soviet soldiers captured by the German army.",
    "To save their war production, the Soviet Union miraculously dismantled and relocated over 1,500 industrial factories east of the Ural Mountains in just a few months.",
    "The Katyusha multiple rocket launcher, terrifyingly nicknamed 'Stalin's Organ' by German troops due to its howling sound, was a devastating weapon used by the Red Army.",
    "In 1942, Joseph Stalin issued Order No. 227, famously declaring 'Not a step back!' (Ni shagu nazad), which heavily penalized retreating without direct orders.",
    "By the end of the war in 1945, the Red Army had grown to an estimated 11 million personnel, making it the largest military force in history at the time.",
    "The Soviet Partisan movement behind German lines grew to hundreds of thousands of fighters, severely disrupting Axis supply lines, blowing up trains, and gathering intelligence.",
    "The Battle of Prokhorovka (part of the Kursk offensive) is often cited as one of the largest single tank clashes ever, involving hundreds of armored vehicles fighting at point-blank range.",
    "During the rapid Soviet offensive in 1944 known as Operation Bagration, the German Army Group Centre was completely annihilated, losing even more men than at Stalingrad."
];

// Hàm hiển thị fact ngẫu nhiên
function showRandomFact() {
    const factDisplay = document.getElementById('fact-display');
    // Tạo chỉ số ngẫu nhiên dựa trên độ dài của mảng facts
    const randomIndex = Math.floor(Math.random() * facts.length);
    
    // Đưa nội dung văn bản vào thẻ HTML
    factDisplay.innerHTML = `<strong>Did you know?</strong> ${facts[randomIndex]}`;
    
    // Reset lại animation (nếu bạn click liên tục, thẻ sẽ có cảm giác giật nhẹ để báo hiệu fact đã đổi)
    factDisplay.style.display = 'none';
    setTimeout(() => {
        factDisplay.style.display = 'block';
    }, 50);
}

// Gắn sự kiện click cho nút bấm sau khi trang tải xong
document.getElementById('fact-button').addEventListener('click', showRandomFact);
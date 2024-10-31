const questions = [
    {
        question: " Trong MS Excel Để ẩn một vài trang tính cùng lúc, đầu tiên phải muốn ẩn, sau đó nhấp chuột phải và chọn",
        options: ["A.	ấn Ctrl, hide", "B.	giữ nút tab, hide", "C.	chọn công cụ hightlight, protect sheet", "D.	ấn tổ hợp phím Ctrl + H"],
        correct: 0
    },
    {
        question: "Trong MS Excel, khi quản lý trang tính, cần phải lưu ý những điểm nào dưới đây?",
        options: [
            "A. Thêm những trang tính mới vào cùng một bảng tính.",
            "B. Sử dụng ô dữ liệu tham chiếu trên cùng bảng tính.",
            "C. Hạn chế số lượng của trang tính được sử dụng trong một dự án.",
            "D. Sử dụng một trang tính cho mỗi dự án và không sử dụng ô tham chiếu."
        ],
        correct: 0 // Thay đổi theo đáp án đúng
    },
    {
        question: "Trong MS Excel, làm thế nào có thể xem nhiều trang tính trong cùng một bảng tính cùng lúc?",
        options: [
            "A. Không thể xem nhiều trang tính trong cùng một bảng tính cùng lúc.",
            "B. Đi đến tab View và chọn New Window.",
            "C. Đi đến tab Page Layout và chọn Orientation.",
            "D. Đi tới tab Insert và chọn Power View."
        ],
        correct: 1 // Đáp án đúng là "B. Đi đến tab View và chọn New Window."
    },
    {
        question: "Trong MS Excel, làm thế nào có thể xem nhiều trang tính của một bảng tính sắp xếp cạnh nhau trong cùng một cửa sổ?",
        options: [
            "A. Di chuyển những trang tính ấy sang những bảng tính riêng biệt, sau đó xếp các bảng tính theo thứ tự.",
            "B. Đi đến tab View, chọn Arrange All và chọn Vertical.",
            "C. Không thể xem nhiều trang tính của một bảng tính sắp xếp cạnh nhau trong cùng một cửa sổ.",
            "D. Đi đến tab View, chọn Arrange All và chọn Tiled."
        ],
        correct: 3 // Đáp án đúng là "D. Đi đến tab View, chọn Arrange All và chọn Tiled."
    },
    {
        question: "Trong MS Excel, có thể tìm thấy chức năng Zoom ở tab Menu nào?",
        options: [
            "A. File",
            "B. Page Layout",
            "C. Review",
            "D. View"
        ],
        correct: 3 // Đáp án đúng là "D. View"
    },
    {
        question: "Trong MS Excel, để phóng to một phần của trang tính, chọn chức năng nào dưới đây trên tab Zoom?",
        options: [
            "A. Zoom",
            "B. 100%",
            "C. Zoom to selection",
            "D. Custom View"
        ],
        correct: 2 // Đáp án đúng là "C. Zoom to selection"
    },
    {
        question: "Trong MS Excel, nếu chọn một vùng dữ liệu để thực hiện lệnh Find and Replace, điều gì dưới đây sẽ xảy ra nếu chọn Replace all?",
        options: [
            "A. Chỉ những ô dữ liệu trong vùng chọn được thay thế.",
            "B. Không có ô dữ liệu nào được thay thế; cần phải chọn toàn bộ trang tính.",
            "C. Tất cả các ô dữ liệu trong bảng tính đáp ứng đúng với các tiêu chí sẽ được thay thế.",
            "D. Lệnh sẽ chỉ ảnh hưởng với giới hạn 100 ô dữ liệu."
        ],
        correct: 0 // Đáp án đúng là "A. Chỉ những ô dữ liệu trong vùng chọn được thay thế."
    },
    {
        question: "Trong MS Excel, nếu một phép tính tham chiếu đến một vùng tên, đáp án nào dưới đây phải được chọn để tìm kiếm?",
        options: [
            "A. Tìm kiếm chính xác tất cả nội dung trong ô dữ liệu.",
            "B. Tìm kiếm giá trị các ô",
            "C. Tìm kiếm chú thích",
            "D. Tìm kiếm công thức"
        ],
        correct: 3 // Đáp án đúng là "D. Tìm kiếm công thức"
    },
    {
        question: "Trong MS Excel, có thể tìm thấy lệnh Go To ở tab và vùng nào?",
        options: [
            "A. View > Find & Select",
            "B. Data > Find & Select",
            "C. Home > Find & Select",
            "D. Insert > Find & Select"
        ],
        correct: 2 // Đáp án đúng là "C. Home > Find & Select"
    },
    {
        question: "Trong MS Excel, phân tích dữ liệu nghĩa là gì?",
        options: [
            "A. Xuất dữ liệu sang bảng tính khác",
            "B. Hiển thị tất cả thông tin",
            "C. Thêm dữ liệu đặc biệt",
            "D. Giải thích dữ liệu bằng bảng tính"
        ],
        correct: 3 // Đáp án đúng là "D. Giải thích dữ liệu bằng bảng tính"
    },
    {
        question: "Trong MS Excel, ký tự phân cách các dữ liệu với nhau gọi là gì?",
        options: [
            "A. Điều kiện",
            "B. Dấu tách",
            "C. Dấu phân số",
            "D. Macro"
        ],
        correct: 1 // Đáp án đúng là "B. Dấu tách"
    },
    {
        question: "Khi dữ liệu được nhập vào một tập tin Excel, định dạng dữ liệu mặc định là gì?",
        options: [
            "A. General",
            "B. Text",
            "C. Date",
            "D. Numbers"
        ],
        correct: 0 // Đáp án đúng là "A. General"
    },
    {
        question: "Trong MS Excel, các quy tắc xác nhận liên quan đến dữ liệu nào?",
        options: [
            "A. Chỉ dữ liệu từ các trang tính Excel khác",
            "B. Dữ liệu mới khi nhập vào trang tính",
            "C. Tất cả các dữ liệu nhập vào và dữ liệu hiện có trong trang tính",
            "D. Dữ liệu đã tồn tại trong trang tính hiện tại"
        ],
        correct: 2 // Đáp án đúng là "C. Tất cả các dữ liệu nhập vào và dữ liệu hiện có trong trang tính"
    },
    {
        question: "Trong MS Excel, sau khi dữ liệu được lọc, điều gì xảy ra với các dòng không có liên quan?",
        options: [
            "A. Chúng bị xóa",
            "B. Chúng được làm nổi bật",
            "C. Chúng được sao chép",
            "D. Chúng được ẩn đi"
        ],
        correct: 3 // Đáp án đúng là "D. Chúng được ẩn đi"
    },
    {
        question: " Auto Filter sử dụng cái gì dưới đây để làm điều kiện lọc dữ liệu?",
        options: [
            "A. Dòng đầu tiên",
            "B. Dòng tiêu đề",
            "C. Dòng cuối cùng",
            "D. Dòng tô màu"
        ],
        correct: 1 // Đáp án đúng là "B. Dòng tiêu đề"
    },
    {
        question: "Trong MS Excel, nhóm và tổ chức dữ liệu trong một bảng tính được thực hiện lúc nào?",
        options: [
            "A. Trước khi lọc dữ liệu",
            "B. Ban đầu",
            "C. Dòng cuối cùng",
            "D. Dòng tô màu"
        ],
        correct: 0 // Đáp án đúng là "A. Trước khi lọc dữ liệu"
    },
    {
        question: "Trong MS Excel, tab nào chứa các lệnh Subtotal?",
        options: [
            "A. Page Layout",
            "B. Insert",
            "C. Formula",
            "D. Data"
        ],
        correct: 3 // Đáp án đúng là "D. Data"
    },
    {
        question: "Trong MS Excel, khi sử dụng các định dạng tại hộp thoại Table, có thể thiết lập bảng theo định dạng nào ngoài việc tạo tiêu đề?",
        options: [
            "A. Bộ lọc",
            "B. Màu",
            "C. Kích thước",
            "D. Phông chữ"
        ],
        correct: 0 // Đáp án đúng là "A. Bộ lọc"
    },
    {
        question: " Trong MS Excel, tab nào xuất hiện khi một kiểu định dạng được áp dụng cho bảng?",
        options: [
            "A. Design",
            "B. Data",
            "C. Style",
            "D. Page Layout"
        ],
        correct: 0 // Đáp án đúng là "A. Design"
    },
    {
        question: " Trong MS Excel, kí tự nào sau đây dùng trong công thức có nghĩa “chỉ nhận giá trị của cột ở trong cùng một hàng”?",
        options: [
            "A. @",
            "B. $",
            "C. &",
            "D. *"
        ],
        correct: 1 // Đáp án đúng là "B. $"
    },
    {
        question: " Trong MS Excel, khi dùng chức năng Remove Duplicates trong việc so sánh các trường dữ liệu được lựa chọn trong hộp thoại, hàng nào sẽ được loại bỏ?",
        options: [
            "A. Hàng ở trên sau khi trùng lặp nội dung",
            "B. Hàng ở dưới để không trùng lặp nội dung",
            "C. Hàng ở trên để không trùng lặp nội dung",
            "D. Hàng ở dưới sau khi trùng lặp nội dung"
        ],
        correct: 0 // Đáp án đúng là "A. Hàng ở trên sau khi trùng lặp nội dung"
    },
    {
        question: " Trong MS Excel, Remove Duplicates sẽ loại bỏ tất cả các thông tin trùng lặp trong một hàng nếu trường dữ liệu được lựa chọn để so sánh.",
        options: [
            "A. Tất cả",
            "B. Ba",
            "C. Năm",
            "D. Hai"
        ],
        correct: 0 // Đáp án đúng là "A. Tất cả"
    },
    {
        question: " Trong MS Excel, để hiển thị tab cần thiết để thực thi macros, nhấp chuột vào tab Files, nhấp Options, nhấp Customized Ribbon, kiểm tra hộp và nhấp chuột vào OK.",
        options: [
            "A. Dữ liệu",
            "B. Phần bổ sung",
            "C. Nhà phát triển",
            "D. Công thức"
        ],
        correct: 2 // Đáp án đúng là "C. Nhà phát triển"
    },
    {
        question: " Trong MS Excel, Macro Security sẽ cảnh báo bất cứ khi nào bạn mở một bảng tính có chứa macro nếu Trust Center được thiết lập tính năng nào?",
        options: [
            "A. Vô hiệu hoá tất cả các macro mà không cần thông báo",
            "B. Vô hiệu hoá tất cả các macro có thông báo",
            "C. Vô hiệu hoá tất cả các macro, trừ macro có chữ ký số",
            "D. Cho phép tất cả các macro"
        ],
        correct: 2 // Đáp án đúng là "C. Vô hiệu hoá tất cả các macro, trừ macro có chữ ký số"
    },
    {
        question: " Trong MS Excel, hàm nào thêm ô vào trong dãy được xác định bởi một điều kiện cho sẵn?",
        options: [
            "A. SUMIF",
            "B. COUNTIF",
            "C. AVERAGEIF",
            "D. VLOOKUP"
        ],
        correct: 0 // Đáp án đúng là "A. SUMIF"
    },
];
// Chọn ngẫu nhiên 30 câu hỏi từ 150 câu hỏi
function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 30);
}

// Hiển thị câu hỏi lên trang
function loadQuiz() {
    const quizContainer = document.getElementById('quiz-form');
    quizContainer.innerHTML = ''; // Xóa câu hỏi cũ
    const randomQuestions = getRandomQuestions();
    randomQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`; // Hiển thị số thứ tự câu hỏi
        
        q.options.forEach((option, i) => {
            questionElement.innerHTML += `
                <div class="options">
                    <label>
                        <input type="radio" name="question${index}" value="${i}">
                        ${option}
                    </label>
                </div>
            `;
        });
        
        questionElement.innerHTML += `<div class="feedback" id="feedback${index}"></div>`; // Khu vực hiển thị kết quả
        quizContainer.appendChild(questionElement);
    });
}

// Kiểm tra câu trả lời và chấm điểm
function submitQuiz() {
    const totalQuestions = 30; // Tổng số câu hỏi
    let score = 0;
    const quizContainer = document.getElementById('quiz-form');
    const selectedAnswers = Array.from(quizContainer.querySelectorAll('input[type="radio"]:checked'));

    selectedAnswers.forEach((answer, index) => {
        const questionIndex = parseInt(answer.name.replace('question', ''));
        const feedbackElement = document.getElementById(`feedback${questionIndex}`);

        if (parseInt(answer.value) === questions[questionIndex].correct) {
            score++;
            feedbackElement.innerHTML = '<span class="correct-answer">Đáp án đúng!</span>';
        } else {
            feedbackElement.innerHTML = `<span class="wrong-answer">Sai! Đáp án đúng là: ${questions[questionIndex].options[questions[questionIndex].correct]}</span>`;
        }
    });

    const percentage = (score / totalQuestions) * 10; // Tính điểm theo thang điểm 10
    document.getElementById('result').innerHTML = `<h2>Kết quả:</h2><p>Điểm của bạn: ${percentage.toFixed(2)}</p>`;
}

// Hàm reset quiz
function resetQuiz() {
    document.getElementById('result').innerHTML = ''; // Xóa kết quả
    loadQuiz(); // Tải lại câu hỏi
}

// Gọi hàm để tải câu hỏi ngay khi trang được tải
window.onload = loadQuiz;
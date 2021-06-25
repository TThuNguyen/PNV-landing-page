--
-- Cấu trúc bảng cho bảng `about`
--
CREATE TABLE `about` (
    `id` int(10) UNSIGNED NOT NULL,
    `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
    `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `content` varchar(900) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
) --
-- Đang đổ dữ liệu cho bảng `about`
--
INSERT INTO
    `about` (`id`, `title`, `image`, `content`)
VALUES
    (
        1,
        '2017-03-23',
        160000,
        'COD',
        'k',
        '2017-03-23 04:46:05',
        '2017-03-23 04:46:05'
    ),
    (
        2,
        '2017-03-21',
        400000,
        'ATM',
        'Vui lòng giao hàng trước 5h',
        '2017-03-21 07:29:31',
        '2017-03-21 07:29:31'
    ),
    (
        12,
        12,
        '2017-03-21',
        520000,
        'COD',
        'Vui lòng chuyển đúng hạn',
        '2017-03-21 07:20:07',
        '2017-03-21 07:20:07'
    ),
    (
        11,
        11,
        '2017-03-21',
        420000,
        'COD',
        'không chú',
        '2017-03-21 07:16:09',
        '2017-03-21 07:16:09'
    ),
    (
        15,
        15,
        '2017-03-24',
        220000,
        'COD',
        'e',
        '2017-03-24 07:14:32',
        '2017-03-24 07:14:32'
    );


-- --------------------------------------------------------
--
-- Cấu trúc bảng cho bảng `history`
--
CREATE TABLE `history` (
    `id` int(10) UNSIGNED NOT NULL,
     `time` varchar(70) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  
       `event`varchar(900) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
) --
-- Đang đổ dữ liệu cho bảng `history`
--
INSERT INTO
    `staffs` (`id`, `time`, `event`)
VALUES
    (
        1,
        '2010',
        'Chi nhánh thứ 3 của PN tại Đông Nam Á chính thức đi vào hoạt động tại Đà Nẵng với 30 sinh viên.'
    ),
    (
        2,
        '2012',
        'Khóa đầu tiên tốt nghiệp với 27 sinh viên.'
    ),
    (
        3,
        '2013',
        'Triển khai 2 chuyên ngành: Phát triển Phần mềm (DeV) và Phát triển Web và Kiểm thử (WeB). WeB thay thế cho chuyên ngành cũ là Quản trị Mạng và Hệ thống (SNA).'
    ),
    (
        4,
        '2014',
        'PN Việt Nam trở thành một tổ chức hoạt động độc lập.'
    ),
    (
        5,
        '2015',
        'PN Việt Nam kỉ niệm 5 năm hoạt động.'
    ),
    (
        6,
        '2016',
        'Kết hợp đào tạo cùng trường Cao đẳng Kĩ thuật Đà Nẵng (nay là Đại học Kỹ thuật Sư phạm – Đại học Đà Nẵng).'
    ),
    (
        7,
        '2017',
        'Hợp tác cùng Trường Cao đẳng Nghề Đà Nẵng để tiến hành chương trình đào tạo 3 năm với 3 chuyên ngành: Kiểm thử Tự động, Thiết kế Web và Lập trình thiết bị di động.'
    ),
    (
        8,
        '2020',
        'PN Việt Nam kỉ niệm 10 năm hoạt động.'
    ),
;

-- --------------------------------------------------------
--
-- Cấu trúc bảng cho bảng `staffs`
--
CREATE TABLE `staffs` (
    `id` int(10) UNSIGNED NOT NULL,
    `name` varchar(70) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
    `position` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
        `email` varchar(70) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
    `faceboo` varchar(70) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
    `name` varchar(70) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,

) --
-- Đang đổ dữ liệu cho bảng `staffs`
--
INSERT INTO
    `staffs` (`id`, `time`, `event`)
VALUES
    (
        1,
        '2010',
        'Chi nhánh thứ 3 của PN tại Đông Nam Á chính thức đi vào hoạt động tại Đà Nẵng với 30 sinh viên.'
    ),
    (
        2,
        '2012',
        'Khóa đầu tiên tốt nghiệp với 27 sinh viên.'
    ),
    (
        3,
        '2013',
        'Triển khai 2 chuyên ngành: Phát triển Phần mềm (DeV) và Phát triển Web và Kiểm thử (WeB). WeB thay thế cho chuyên ngành cũ là Quản trị Mạng và Hệ thống (SNA).'
    ),
    (
        4,
        '2014',
        'PN Việt Nam trở thành một tổ chức hoạt động độc lập.'
    ),
    (
        5,
        '2015',
        'PN Việt Nam kỉ niệm 5 năm hoạt động.'
    ),
    (
        6,
        '2016',
        'Kết hợp đào tạo cùng trường Cao đẳng Kĩ thuật Đà Nẵng (nay là Đại học Kỹ thuật Sư phạm – Đại học Đà Nẵng).'
    ),
    (
        7,
        '2017',
        'Hợp tác cùng Trường Cao đẳng Nghề Đà Nẵng để tiến hành chương trình đào tạo 3 năm với 3 chuyên ngành: Kiểm thử Tự động, Thiết kế Web và Lập trình thiết bị di động.'
    ),
    (
        8,
        '2020',
        'PN Việt Nam kỉ niệm 10 năm hoạt động.'
    ),
;

-- --------------------------------------------------------
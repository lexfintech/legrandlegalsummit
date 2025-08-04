<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

$requiredFields = [
    'name', 'email', 'phone', 'nomineeName', 'designation', 'company',
    'profileLink', 'education', 'bestDescribe', 'experience', 'bio',
    'expertise', 'categoryHead', 'awardCategory', 'city', 'state'
];

$errors = [];
foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $errors[$field] = 'This field is required.';
    }
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Invalid email format.';
}

if (!preg_match('/^\d{10}$/', $data['phone'])) {
    $errors['phone'] = 'Phone number must be 10 digits.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

$message = "New Nomination Received:\n\n";
$message .= "Submitted by: {$data['name']} ({$data['email']}, {$data['phone']})\n\n";
$message .= "Nominee Details:\n";
$message .= "- Name: {$data['nomineeName']}\n";
$message .= "- Designation: {$data['designation']}\n";
$message .= "- Company: {$data['company']}\n";
$message .= "- Profile: {$data['profileLink']}\n";
$message .= "- Education: {$data['education']}\n";
$message .= "- Experience: {$data['experience']} years\n";
$message .= "- Category: {$data['categoryHead']} > {$data['awardCategory']}\n\n";
$message .= "Location: {$data['city']}, {$data['state']}\n\n";
$message .= "Description:\n{$data['bestDescribe']}\n\n";
$message .= "Bio:\n{$data['bio']}\n\n";
$message .= "Expertise:\n{$data['expertise']}";

$to = "satish.yadlapalli@lexfintech.io";
$subject = "New Nomination: {$data['nomineeName']}";
$headers = "From: {$data['email']}\r\n";
$headers .= "Reply-To: {$data['email']}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Nomination sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
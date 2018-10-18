<?php
/**
 * README
 * This file is intended to set the webhook.
 * Uncommented parameters must be filled
 */
// Load composer
require_once __DIR__ . '/vendor/autoload.php';
// Add you bot's API key and name
$bot_api_key  = '394380496:AAFtuRHZdHv10JS-n1JqSJtSPDixCGI4rDU';
$bot_username = 'zxwtestbot';
// Define the URL to your hook.php file
$hook_url     = 'https://game.fund/telegrambot/hook/zxwtestbot/hook.php';
$certificate_path = 'pem/public.pem';
try {
    // Create Telegram API object
    $telegram = new Longman\TelegramBot\Telegram($bot_api_key, $bot_username);
    // Set webhook
    //$result = $telegram->setWebhook($hook_url, $cert_pem);
    // To use a self-signed certificate, use this line instead
    $result = $telegram->setWebhook($hook_url, ['certificate' => $certificate_path]);
    if ($result->isOk()) {
        echo $result->getDescription();
    }
} catch (Longman\TelegramBot\Exception\TelegramException $e) {
    //print_r($e);
    echo $e->getMessage();
}
?>
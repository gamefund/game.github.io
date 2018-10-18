<?php
/**
 * This file is part of the TelegramBot package.
 *
 * (c) Avtandil Kikabidze aka LONGMAN <akalongman@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Longman\TelegramBot\Commands\SystemCommands;

use Longman\TelegramBot\Commands\SystemCommand;
use Longman\TelegramBot\Conversation;
use Longman\TelegramBot\Request;

/**
 * Generic message command
 *
 * Gets executed when any type of message is sent.
 */
class GenericmessageCommand extends SystemCommand
{
    /**
     * @var string
     */
    protected $name = 'genericmessage';

    /**
     * @var string
     */
    protected $description = 'Handle generic message';

    /**
     * @var string
     */
    protected $version = '1.1.0';

    /**
     * @var bool
     */
    protected $need_mysql = true;

    /**
     * Command execute method if MySQL is required but not available
     *
     * @return \Longman\TelegramBot\Entities\ServerResponse
     * @throws \Longman\TelegramBot\Exception\TelegramException
     */
    public function executeNoDb()
    {
        $message = $this->getMessage();
        //$channel_chat_created = $message->getChannelChatCreated();
        $chat_id = $message->getChat()->getId();
        $user_id = $message->getFrom()->getId();
        $text = $message->getText();
        $message_id = $message->getMessageId();
        $photo = $message->getPhoto();
        $video = $message->getVideo();
        $document = $message->getDocument();

         $deleta_message = ['chat_id'       => $chat_id,
                            'message_id'    => $message_id,];

        $res=fopen("res.txt","a");
        fwrite($res,"chat_id=".$chat_id."\n");
        fwrite($res,"user_id=".$user_id."\n");
        fwrite($res,"text=".$text."\n");
        fwrite($res,"message_id=".$message_id."\n");
        fwrite($res,"index=".stripos($text, 'https://game.fund')."\n");
        if($photo || $video || $document || (stripos($text, 'http') === 0))
        {
            if(stripos($text, 'https://game.fund') === 0)
                return Request::emptyResponse();
            $response = json_decode(Request::execute("deleteMessage",$deleta_message), true);
            fwrite($res,"execute result=".$response["ok"]."\n");
            fwrite($res,"execute error_code=".$response["error_code"]."\n");
            fwrite($res,"execute description=".$response["description"]."\n");
            if(!$response["ok"])
                fwrite($res,"execute result="."error!"."\n");
            //fwrite($res,"photo="."exist"."\n");
        }
        /*if($video)
            fwrite($res,"video="."exist"."\n");
        if($document)
            fwrite($res,"document="."exist"."\n");
        if(stripos($text, 'http') === 0)
            fwrite($res,"http="."exist"."\n");*/
        // Do nothing
        return Request::emptyResponse();
    }

    /**
     * Command execute method
     *
     * @return \Longman\TelegramBot\Entities\ServerResponse
     * @throws \Longman\TelegramBot\Exception\TelegramException
     */
    public function execute()
    {
        //If a conversation is busy, execute the conversation command after handling the message
        $conversation = new Conversation(
            $this->getMessage()->getFrom()->getId(),
            $this->getMessage()->getChat()->getId()
        );

        $message = $this->getMessage();
        //$channel_chat_created = $message->getChannelChatCreated();
        $chat_id = $message->getChat()->getId();
        $user_id = $message->getFrom()->getId();
        $res=fopen("res.txt","a");
        fwrite($res,"chat_id=".$chat_id."\n");
        fwrite($res,"user_id=".$user_id."\n");

        //Fetch conversation command if it exists and execute it
        if ($conversation->exists() && ($command = $conversation->getCommand())) {
            return $this->telegram->executeCommand($command);
        }

        return Request::emptyResponse();
    }
}

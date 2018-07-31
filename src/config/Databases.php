<?php
/**
 * Created by PhpStorm.
 * User: pusty
 * Date: 31.07.2018
 * Time: 21:13
 */
namespace src\config;

class Databases{
    private $database = array(
        'test' => array(
            'host' => 'localhost',
            'port' => 3307,
            'user' => 'root',
            'password' => 'usbw',
            'dbName' => 'rankme'
        ),
        'test1' => array(
            'host' => 'localhost',
            'port' => 3307,
            'user' => 'root',
            'password' => 'usbw',
            'dbName' => 'rankme'
        ),
    );

    /**
     * @return array
     */
    public function getDatabase(): array
    {
        return $this->database;
    }

    public function getMessage($message) :array {
        return $this->database[$message];
    }
}

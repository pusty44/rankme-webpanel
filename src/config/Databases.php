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
        'arena' => array(
            'name' => 'testowy serwer z bardzo długą nazwą dla niego',
            'host' => 'localhost',
            'port' => 3307,
            'user' => 'root',
            'password' => 'usbw',
            'dbName' => 'rankme'
        ),
        'dd2' => array(
            'name' => 'testowy serwer z bardzo długą nazwą dla niego123445236256',
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
    public function getDatabase()  {
        return $this->database;
    }

    public function getMessage($message) {
        return $this->database[$message];
    }
}

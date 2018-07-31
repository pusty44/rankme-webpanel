<?php

/**
 * Created by PhpStorm.
 * User: pusty
 * Date: 31.07.2018
 * Time: 21:12
 */
namespace src\Service;
use Exception;
use PDO;
use src\config\Databases;

class dbService
{
    private $dbh;

    /**
     * @return mixed
     */
    public function getDbh()
    {
        return $this->dbh;
    }

    /**
     * @param mixed $dbh
     */
    public function setDbh($dbh)
    {
        $this->dbh = $dbh;
    }

    public function connect($host,$port,$user,$password,$dbName){
        try{
            $this->dbh = new PDO('mysql:host='.$host.':'.$port.';dbname='.$dbName, $user, $password);
            $this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->dbh;
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    public function fetchData($dbh){
        try {
            $stmt = $dbh->prepare('SELECT `id`,`steam`, `name`, `score` FROM rankme');
            $stmt->execute();
            return $stmt->fetchAll();
        }catch(Exception $e){
            echo $e->getMessage();
        }

    }
    public function fetchUser($dbh,$id){
        try {
            $stmt = $dbh->prepare('SELECT * FROM rankme WHERE id=:id');
            $stmt->bindValue(':id',$id,PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->fetch();
        }catch(Exception $e){
            echo $e->getMessage();
        }

    }
}
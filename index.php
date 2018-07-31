<?php
/**
 * Created by PhpStorm.
 * User: pusty
 * Date: 31.07.2018
 * Time: 21:01
 */
require_once 'vendor/autoload.php';
require_once 'src/config/Databases.php';
require_once 'src/Service/dbService.php';
use src\config\Databases;
use src\Service\dbService;
$loader = new Twig_Loader_Filesystem('template');
$twig = new Twig_Environment($loader, array(
    'cache' => 'cache',
));
$config = new Databases();
if(isset($_GET['action'])){
    switch($_GET['action']){
        case 'servers':
            $servers = $config->getDatabase();
            $keys = array();
            foreach($servers as $key=>$value){
                $keys[] = $key;
            }
            echo $twig->render('servers.html.twig', array('servers' => $keys));
            break;
        case 'list-users':
            $servercfg = $config->getMessage($_GET['server']);
            $database = new dbService();
            $db = $database->connect($servercfg['host'],$servercfg['port'],$servercfg['user'],$servercfg['password'],$servercfg['dbName']);
            $users = $database->fetchData($db);
            $keys = array();
            foreach($users as $user){
                $keys[] = [
                    'id' => $user['id'],
                    'name' => $user['name'],
                    'steamid' => $user['steam'],
                    'points' => $user['score']
                ];
            }
            echo $twig->render('list-users.html.twig', array('users' => $keys));
            break;
        case 'user-details':
            $servercfg = $config->getMessage($_GET['server']);
            $database = new dbService();
            $db = $database->connect($servercfg['host'],$servercfg['port'],$servercfg['user'],$servercfg['password'],$servercfg['dbName']);
            $user = $database->fetchUser($db,$_GET['id']);
            echo $twig->render('user-details.html.twig', array('user' => $user));
            break;
        default:

            break;
    }
} else {
//    header('HTTP/1.1 301 Moved Permanently');
//    header('Location: /servers');
}
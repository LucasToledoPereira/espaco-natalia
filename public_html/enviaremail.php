<?php
/**
 * Created by PhpStorm.
 * User: Richard
 * Date: 17/02/2018
 * Time: 13:44
 **/

date_default_timezone_set('America/Sao_Paulo');

$html ="<div style='width:900px; height:auto; margen:auto '>";


$nome = $_REQUEST['name'];
$nome = utf8_decode($nome);
$email = $_REQUEST['email'];
$msg = $_REQUEST['message'];
$subject = $_REQUEST['subject'];
 
$subject = utf8_decode($subject);
 

$msg = utf8_decode($msg);


$html .="Nome: $nome <br/>";
$html .="Email: $email <br/>";
$html .="Mensagem: $msg <br/>";

$html .="Data e hora: " . date("d/m/Y H:i:s");

$html .= "</div>";



$html;


####################################################       PHP MAILLER       #####################
require_once('contato/class.phpmailer.php');

$mailer = new PHPMailer();
$mailer->IsSMTP();
$mailer->SMTPDebug = 1;
$mailer->Port = 587; //Indica a porta de conexao

$mailer->Host = 'localhost';
$mailer->SMTPAuth = true; //Define se havera ou nao autenticacao no SMTP
$mailer->Username = 'contato@espaconataliatoledo.com.br';
$mailer->Password = 'XZy!r^Qt8kUT';
$mailer->FromName = $nome; //Nome que sera exibido para o destinatario
$mailer->From = 'contato@espaconataliatoledo.com.br'; //Obrigatorio ser a mesma caixa postal indicada em "username"
$mailer->AddReplyTo($email, $nome);
$mailer->AddAddress('contato@espaconataliatoledo.com.br'); //XI9p5o{Z?~hg

$mailer->AddBCC('nataliafisio6@gmail.com', 'NATALIA'); // cc
//$mailer->AddAnAddress('ReplyTo', $emaildapessoa, $nome_para);

$mailer->IsHTML(true);
$mailer->Subject = $subject ;
$mailer->Body = $html;


if($mailer->Send())
{
echo "<script>alert('$nome, Seu email foi enviado com sucesso!')</script>";
 
}


 

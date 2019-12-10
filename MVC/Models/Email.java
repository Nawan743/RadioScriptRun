package Models;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Email {

	static String emailRemetente = "o nosso email aqui";
	static String senhaRemetente = "a nossa senha aqui";

	public void enviaEmailBoasVindas(Player player) {
		String tituloEmail = "CORRA! Você está no RadioScript Run \\o/";
		String corpoEmail = "Olá " + player.getNome() + ",\n" + "Seja bem-vindo ao RadioScriptRun!\n\n"
				+ "Nossa equipe está feliz em ter você como nosso jogador e esperamos que tenha a melhor experiência possível!\n"
				+ "Sempre que desejar entre em contato conosco atráves desse email.\n\n"
				+ "Obrigado e lembresse: CORRA!!";

		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");

		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emailRemetente, senhaRemetente);
			}
		});

		Message message = new MimeMessage(session);
		try {
			Address[] enviarPara = InternetAddress.parse(player.getEmail());

			message.setFrom(new InternetAddress(emailRemetente));
			message.setRecipients(Message.RecipientType.TO, enviarPara);
			message.setSubject(tituloEmail);
			message.setText(corpoEmail);

			Transport.send(message);
			System.out.println(
					"Email de boas vindas enviado para " + player.getNome() + " no email " + player.getEmail());

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}

	}

}

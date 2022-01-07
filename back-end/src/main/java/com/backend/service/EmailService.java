package com.backend.service;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
 
public class EmailService {
	private final String username;
	private final String password;
	private final String host;
	private String subject;
	private String body;
	private Properties props;
    private Session session;
    private Message message;
	public EmailService(){
		username = "ritik.srivastava305@gmail.com";
        password = "nuspdlxoomlkghix";
        subject="Hostel Curfew Time";
		body="Hostel curfew time is about to end in 10 minutes, please get back to hostel asap!";
        host = "localhost";
        props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        session = Session.getInstance(props,
          new javax.mail.Authenticator() {
            protected PasswordAuthentication
                           getPasswordAuthentication() {     
                return new PasswordAuthentication(username,password);
            }
          });
        message = new MimeMessage(session);
	}
    public void sendmail(List<String> recievers) {
        try {
//            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("ritik.srivastava305@gmail.com"));
            message.setSubject(subject);
            message.setText(body);
            for(int i=0;i<recievers.size();i++) {
            	message.setRecipients(Message.RecipientType.TO,
                        InternetAddress.parse(recievers.get(i)));
	            Transport.send(message);
	            System.out.println("Successfully sent to: "+recievers.get(i));
            }
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
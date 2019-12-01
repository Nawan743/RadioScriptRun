package View;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Models.ValidaSessao;

@WebServlet("/jogo")
public class Jogo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession sessao = req.getSession();
		RequestDispatcher dispatcher;
		
		dispatcher = (ValidaSessao.estaValidado(sessao)) ? req.getRequestDispatcher("/WEB-INF/jogo.jsp") : req.getRequestDispatcher("/");
		dispatcher.forward(req, resp);
	}

}

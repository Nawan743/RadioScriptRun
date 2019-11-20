 package Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Models.Banco;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Banco banco = new Banco();
		banco.criarBanco();
		String player = req.getParameter("username");
		String senha = req.getParameter("password");
		RequestDispatcher dispatcher;
		
		if (!banco.PlayerExiste(player) || !banco.senhaValida(player, senha)) {			
			if (!banco.PlayerExiste(player)) {
				req.setAttribute("infoLogin", "Player informado não existe!");
				req.setAttribute("telaExibir", "login");
			} else if (!banco.senhaValida(player, senha)) {
				req.setAttribute("infoLogin", "Senha incorreta!");
				req.setAttribute("telaExibir", "login");
			}
			dispatcher = req.getRequestDispatcher("index.jsp");
			dispatcher.forward(req, resp);
		} else {
			dispatcher = req.getRequestDispatcher("/menu");
			dispatcher.forward(req, resp);
		}		
	}

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		RequestDispatcher dispatcher = req.getRequestDispatcher("index.jsp");
		req.setAttribute("telaExibir", "login");
		dispatcher.forward(req, resp);
	}

}

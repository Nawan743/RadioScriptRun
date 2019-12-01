package Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Models.Banco;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		Banco banco = new Banco();
		String player = req.getParameter("username");
		String senha = req.getParameter("password");
		RequestDispatcher dispatcher;

		if (banco.playerExiste(player) && banco.senhaValida(player, senha)) {
			HttpSession sessao = req.getSession();
			sessao.setAttribute("playerLogado", player);
			dispatcher = req.getRequestDispatcher("/menu");
			req.setAttribute("Player", player);
			dispatcher.forward(req, resp);

		} else {
			if (!banco.playerExiste(player)) {
				req.setAttribute("infoLogin", "Player informado não existe!");
				req.setAttribute("telaExibir", "login");
			} else if (!banco.senhaValida(player, senha)) {
				req.setAttribute("infoLogin", "Senha incorreta!");
				req.setAttribute("telaExibir", "login");
			}
			dispatcher = req.getRequestDispatcher("index.jsp");
			dispatcher.forward(req, resp);
		}
	}

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		RequestDispatcher dispatcher = req.getRequestDispatcher("index.jsp");
		req.setAttribute("telaExibir", "login");
		dispatcher.forward(req, resp);
	}

}

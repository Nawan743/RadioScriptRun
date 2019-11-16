package Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Models.Banco;
import Models.Player;

@WebServlet("/cadastrar")
public class CadastroServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		RequestDispatcher dispatcher;

		Player player = new Player();
		player.setNome(req.getParameter("username"));
		player.setSenha(req.getParameter("password"));
		String confirmSenha = req.getParameter("confirmPassword");
		player.setEmail(req.getParameter("email"));
		player.setRank(0);
		
		if (!player.getSenha().equals(confirmSenha)) {
			req.setAttribute("info", "Senhas não coincidem!");
			dispatcher = req.getRequestDispatcher("index.jsp");
			dispatcher.forward(req, resp);
//			resp.sendRedirect("index.jsp");
		} else {
			Banco banco = new Banco();
			banco.criarBanco();

			if (banco.PlayerExiste(player.getNome())) {
				req.setAttribute("info", "Player informado já existe!");
			} else {
				banco.registraPlayer(player);
				req.setAttribute("info", "Player cadastrado com sucesso!");
			}
			dispatcher = req.getRequestDispatcher("index.jsp");
			dispatcher.forward(req, resp);
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		RequestDispatcher dispatcher = req.getRequestDispatcher("index.jsp");
		dispatcher.forward(req, resp);
	}

}

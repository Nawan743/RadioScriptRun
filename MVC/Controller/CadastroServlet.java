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

		String nome = req.getParameter("username");
		String senha = req.getParameter("password");
		String confirmSenha = req.getParameter("confirmPassword");
		String email = req.getParameter("email");
		
		if (!senha.equals(confirmSenha)) {
			req.setAttribute("infoCadastro", "Senhas não coincidem!");
			req.setAttribute("telaExibir", "cadastro");
			dispatcher = req.getRequestDispatcher("index.jsp");
			dispatcher.forward(req, resp);
		} else {
			Banco banco = new Banco();
			banco.criarBanco();

			if (banco.playerExiste(nome)) {
				req.setAttribute("infoCadastro", "Player informado já existe!");
				req.setAttribute("telaExibir", "cadastro");
			} else {
				if (nome == "" || senha == "" || email == "") {
					req.setAttribute("infoCadastro", "Por favor, preencha todos os campos!");
					req.setAttribute("telaExibir", "cadastro");
				} else if (nome.equalsIgnoreCase(senha)) {
					req.setAttribute("infoCadastro", "Sua senha não pode ser igual seu nome!");
					req.setAttribute("telaExibir", "cadastro");
				} else {
					Player player = new Player(nome, senha, email);
					banco.registraPlayer(player);
					req.setAttribute("telaExibir", "login");
					req.setAttribute("infoLogin", "Player cadastrado com sucesso!");					
				}
			}
			dispatcher = req.getRequestDispatcher("index.jsp");
			dispatcher.forward(req, resp);
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		RequestDispatcher dispatcher = req.getRequestDispatcher("index.jsp");
		req.setAttribute("telaExibir", "cadastro");
		dispatcher.forward(req, resp);
	}

}

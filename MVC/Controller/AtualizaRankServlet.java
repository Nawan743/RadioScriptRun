package Controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Models.Banco;
import Models.Player;

@WebServlet("/atualiza-rank")
public class AtualizaRankServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private Banco banco = new Banco();

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		Player player = (Player) request.getAttribute("player");
		Integer novaPontuacao = Integer.parseInt((String) request.getAttribute("pontosAtuais"));
		banco.criarBanco();

		String retorno;

		if (banco.editarRank(player, novaPontuacao)) {
			retorno = "{\"retorno\": \"sucesso\"}";
		} else {
			retorno = "{\"retorno\": \"falha\"}";
		}

		out.print(retorno);
		out.flush();
	}

}

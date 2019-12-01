package Models;

import javax.servlet.http.HttpSession;

public class ValidaSessao {
	public static boolean estaValidado(HttpSession sessao) {
		if (sessao.getAttribute("playerLogado") != null)
			return true;
		return false;
	}
}

package Models;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.util.ArrayList;

public class Banco {

	/*
	 * public ArrayList<Player> buscarDadosBanco() { ArrayList<Player> players =
	 * S3.buscarDadosBanco(); return players; }
	 */

	private LineNumberReader lineCounter;

	public void criarBanco() throws IOException {
		File banco = new File("banco.txt");
		if (!banco.exists()) {
			banco.createNewFile();
		}
	}

	public ArrayList<Player> buscarDadosBanco() throws IOException {
		criarBanco();
		ArrayList<Player> players = new ArrayList<Player>();

		lineCounter = new LineNumberReader(new InputStreamReader(new FileInputStream("banco.txt")));
		String nextLine = null;

		while ((nextLine = lineCounter.readLine()) != null) {
			if (!nextLine.isEmpty() && nextLine != "") {
				String[] info = nextLine.trim().split(";");
				Player player = new Player(info[0].trim(), info[1].trim(), info[2].trim(),
						Integer.parseInt(info[3].trim()));
				players.add(player);
			}
		}
		lineCounter.close();
		return players;
	}

	public void enviarDadosBanco(ArrayList<Player> players) throws IOException {
		File banco = new File("banco.txt");
		BufferedWriter writer = new BufferedWriter(new FileWriter(banco, false));

		for (int i = 0; i < players.size(); i++) {
			writer.append(players.get(i).toString());
			writer.newLine();
		}
		writer.close();

		// S3.salvarDadosBanco(banco);
	}

	public void registraPlayer(Player p) throws IOException {
		criarBanco();
		ArrayList<Player> players = buscarDadosBanco();
		players.add(p);
		enviarDadosBanco(players);
		Email enviaEmail = new Email();
		enviaEmail.enviaEmailBoasVindas(p);
	}

	public boolean playerExiste(String playerValidar) throws IOException {
		boolean encontrou = false;
		ArrayList<Player> players = buscarDadosBanco();
		for (int i = 0; i < players.size(); i++) {
			if (players.get(i).getNome().equalsIgnoreCase(playerValidar)) {
				encontrou = true;
				break;
			}
		}
		return encontrou;
	}

	public boolean senhaValida(String playerValidar, String senhaValidar) throws IOException {
		boolean encontrou = false;
		ArrayList<Player> players = buscarDadosBanco();
		for (int i = 0; i < players.size(); i++) {
			if (players.get(i).getNome().equalsIgnoreCase(playerValidar)
					&& players.get(i).getSenha().equals(senhaValidar)) {
				encontrou = true;
				break;
			}
		}
		return encontrou;
	}

	public boolean editarRank(Player player) throws IOException {

		ArrayList<Player> players = buscarDadosBanco();

		for (int i = 0; i < players.size(); i++) {
			if (players.get(i).getNome().equalsIgnoreCase(player.getNome())
					&& players.get(i).getRank() < player.getRank()) {
				Player player_aux = players.get(i);
				player_aux.setRank(player.getRank());
				players.set(i, player_aux);
				break;
			}
		}

		enviarDadosBanco(players);
		return true;
	}

	public Player instanciaPlayer(String nomePlayer) throws IOException {
		ArrayList<Player> players = buscarDadosBanco();
		for (int i = 0; i < players.size(); i++) {
			if (players.get(i).getNome().equalsIgnoreCase(nomePlayer)) {
				return players.get(i);
			}
		}

		return null;

	}

}
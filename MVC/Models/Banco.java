package Models;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import services.S3;

public class Banco {

	public ArrayList<Player> buscarDadosBanco() {
		ArrayList<Player> players = S3.buscarDadosBanco();
		return players;
	}

	public void enviarDadosBanco(ArrayList<Player> players) throws IOException {
		File banco = new File("banco.txt");
		BufferedWriter writer = new BufferedWriter(new FileWriter(banco, false));

		for (int i = 0; i < players.size(); i++) {
			writer.append(players.get(i).toString());
			writer.newLine();
			System.out.println(players.get(i));
		}
		writer.close();

		S3.salvarDadosBanco(banco);
	}

	public void registraPlayer(Player p) throws IOException {
		ArrayList<Player> players = buscarDadosBanco();
		players.add(p);
		enviarDadosBanco(players);
	}

	public boolean playerExiste(String playerValidar) {
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

}

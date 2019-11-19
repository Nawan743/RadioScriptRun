package Controller;

import java.util.ArrayList;

import Models.Player;

public class QuickSort {

	public static ArrayList<Player> ordenar(ArrayList<Player> players, int inicio, int fim) {
		if (inicio < fim) {
			int posicaoPivo = separar(players, inicio, fim);
			ordenar(players, inicio, posicaoPivo - 1);
			ordenar(players, posicaoPivo + 1, fim);
		}
		return players;
	}

	private static int separar(ArrayList<Player> players, int inicio, int fim) {
		Player pivo = players.get(inicio);
		int i = inicio + 1, f = fim;
		while (i <= f) {
			if (players.get(i).getRank() >= pivo.getRank())
				i++;
			else if (pivo.getRank() > players.get(f).getRank())
				f--;
			else {
				Player troca = players.get(i);
				players.set(i, players.get(f));
				players.set(f, troca);
				i++;
				f--;
			}
		}
		players.set(inicio, players.get(f));
		players.set(f, pivo);
		return f;
	}

}

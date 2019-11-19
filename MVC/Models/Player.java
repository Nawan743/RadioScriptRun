package Models;

public class Player {
	
	private final String nome;
	private final String senha;
	private final String email;
	private Integer pontuacao;
	
	public Player(String nome, String senha, String email) {
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.pontuacao = 0;
	}
	
	public String getNome() {
		return nome;
	}
	public String getSenha() {
		return senha;
	}
	public String getEmail() {
		return email;
	}
	public Integer getRank() {
		return pontuacao;
	}
	public void setRank(Integer pontuacao) {
		this.pontuacao = pontuacao;
	}

}

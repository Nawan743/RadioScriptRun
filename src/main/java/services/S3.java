package services;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;

import Models.Player;

public class S3 {

	private static String awsId = "";
	private static String awsKey = "";
	private static String region = "";
	private static String bucketName = "";
	private static String fileName = "";

	public static ArrayList<Player> buscarDadosBanco() {

		S3Object fullObject = null, objectPortion = null, headerOverrideObject = null;
		ArrayList<Player> players = null;
		try {
			BasicAWSCredentials awsCred = new BasicAWSCredentials(awsId, awsKey);
			AmazonS3 s3client = AmazonS3ClientBuilder.standard().withRegion(Regions.fromName(region))
					.withCredentials(new AWSStaticCredentialsProvider(awsCred)).build();

			// Get an object and print its contents.
			// System.out.println("Downloading an object");
			fullObject = s3client.getObject(new GetObjectRequest(bucketName, fileName));
			// System.out.println("Content-Type: " +
			// fullObject.getObjectMetadata().getContentType());
			// System.out.println("Content: ");
			// try {
			//	displayTextInputStream(fullObject.getObjectContent());
			//} catch (IOException e) {
			//	e.printStackTrace();
			// }

			try {
				players = montaListaPlayers(fullObject.getObjectContent());
			} catch (IOException e) {
				e.printStackTrace();
			}

		} catch (AmazonServiceException e) {
			// The call was transmitted successfully, but Amazon S3 couldn't process
			// it, so it returned an error response.
			e.printStackTrace();
		} catch (SdkClientException e) {
			// Amazon S3 couldn't be contacted for a response, or the client
			// couldn't parse the response from Amazon S3.
			e.printStackTrace();
		} finally {
			// To ensure that the network connection doesn't remain open, close any open
			// input streams.
			if (fullObject != null) {
				try {
					fullObject.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (objectPortion != null) {
				try {
					objectPortion.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (headerOverrideObject != null) {
				try {
					headerOverrideObject.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		return players;
	}

	public static void salvarDadosBanco(File file) {

		try {
			BasicAWSCredentials awsCred = new BasicAWSCredentials(awsId, awsKey);
			AmazonS3 s3client = AmazonS3ClientBuilder.standard().withRegion(Regions.fromName(region))
					.withCredentials(new AWSStaticCredentialsProvider(awsCred)).build();

			// Upload a file as a new object with ContentType and title specified.
			PutObjectRequest request = new PutObjectRequest(bucketName, fileName, file);
			s3client.putObject(request);
		} catch (AmazonServiceException e) {
			// The call was transmitted successfully, but Amazon S3 couldn't process
			// it, so it returned an error response.
			e.printStackTrace();
		} catch (SdkClientException e) {
			// Amazon S3 couldn't be contacted for a response, or the client
			// couldn't parse the response from Amazon S3.
			e.printStackTrace();
		}
	}

	private static ArrayList<Player> montaListaPlayers(InputStream input) throws IOException {
		BufferedReader reader = new BufferedReader(new InputStreamReader(input));
		String line = null;

		ArrayList<Player> players = new ArrayList<Player>();

		while ((line = reader.readLine()) != null) {
			String[] info = line.trim().split(";");
			Player player = new Player(info[0].trim(), info[1].trim(), info[2].trim(),
					Integer.parseInt(info[3].trim()));

			players.add(player);
		}
		for (int i = 0; i < players.size(); i++) {
			players.get(i).toString();
			System.out.println(""); 
		}
		return players;
	}

	private static void displayTextInputStream(InputStream input) throws IOException {
		// Read the text input stream one line at a time and display each line.
		BufferedReader reader = new BufferedReader(new InputStreamReader(input));
		String line = null;
		while ((line = reader.readLine()) != null) {
			System.out.println(line);
		}
		System.out.println();
	}
}

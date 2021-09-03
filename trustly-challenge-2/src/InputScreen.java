import java.awt.Color;
import java.awt.Font;
import java.awt.event.FocusAdapter;
import java.awt.event.FocusEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class InputScreen extends JFrame {
	JButton printButton, clearButton;
	JLabel nameInputLabel, nationalityInputLabel, biggestDreamInputLabel;
	JTextField nameInput, nationalityInput, biggestDreamInput;
	Font font = new Font("Century Gothic", Font.BOLD, 13);

	InputScreen() {
	
/*SCREEN________________________________________________________________________________________________________________________________*/

		this.setSize(400,250);
		this.setTitle("Trustly Challenge 2");
		this.setResizable(false);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.getContentPane().setLayout(null);
		this.getContentPane().setBackground(new Color(11,224,111));
		
/*BUTTONS________________________________________________________________________________________________________________________________*/
	
		printButton = new JButton("Print");
		printButton.setSize(100,30);
		printButton.setLocation(40,160);
		printButton.setFont(font);
		
		PrintListener printData = new PrintListener();
		printButton.addMouseListener(printData);
		
		GainFocus gainFocus = new GainFocus();
		printButton.addFocusListener(gainFocus);
		
		LoseFocus loseFocus = new LoseFocus();
		printButton.addFocusListener(loseFocus);
		
		this.add(printButton);
		
		clearButton = new JButton("Clear");
		clearButton.setSize(100,30);
		clearButton.setLocation(230,160);
		clearButton.setFont(font);
		clearButton.addMouseListener(new ClearListener());
		
		ClearListener clearFields = new ClearListener();
		clearButton.addMouseListener(clearFields);
		
		MouseEnters mouseEnters = new MouseEnters();
		clearButton.addMouseListener(mouseEnters);
		
		MouseExits mouseExits = new MouseExits();
		clearButton.addMouseListener(mouseExits);
		
		this.add(clearButton);
		
/*LABELS________________________________________________________________________________________________________________________________*/

		nameInputLabel = new JLabel("Name");
		nameInputLabel.setSize(100,30);
		nameInputLabel.setLocation(10,30);
		nameInputLabel.setFont(font);
		this.add(nameInputLabel);
		
		nationalityInputLabel = new JLabel("Nationality");
		nationalityInputLabel.setSize(100,30);
		nationalityInputLabel.setLocation(10,60);
		nationalityInputLabel.setFont(font);
		this.add(nationalityInputLabel);
		
		biggestDreamInputLabel = new JLabel("Biggest Dream");
		biggestDreamInputLabel.setSize(100,30);
		biggestDreamInputLabel.setLocation(10,90);
		biggestDreamInputLabel.setFont(font);
		this.add(biggestDreamInputLabel);
		
/*TEXT INPUTS________________________________________________________________________________________________________________________________*/
		
		nameInput = new JTextField();
		nameInput.setEditable(true);
		nameInput.setSize(320,20);
		nameInput.setLocation(55,35);
		this.add(nameInput);

		
		nationalityInput = new JTextField();
		nationalityInput.setEditable(true);
		nationalityInput.setSize(285,20);
		nationalityInput.setLocation(90,65);
		this.add(nationalityInput);
		
		biggestDreamInput = new JTextField();
		biggestDreamInput.setEditable(true);
		biggestDreamInput.setSize(265,20);
		biggestDreamInput.setLocation(110,95);
		this.add(biggestDreamInput);
		
		this.setVisible(true);
	}
	
/*EVENTS________________________________________________________________________________________________________________________________*/

	class ClearListener extends MouseAdapter{
		public void mouseClicked(MouseEvent e){
			nameInput.setText("");
			nationalityInput.setText("");
			biggestDreamInput.setText("");
		}
	}
	
	class PrintListener extends MouseAdapter{
		public void mouseClicked(MouseEvent e){
			String personName = nameInput.getText();
			String personNationality = nationalityInput.getText();
			String personBiggestDream = biggestDreamInput.getText();
			
			Person person = new Person(personName, personNationality, personBiggestDream);
			
			person.shoutPersonData();
		}
	}
	
	class MouseEnters extends MouseAdapter{
		public void mouseEntered(MouseEvent e){
			clearButton.setBackground(new Color(211, 211, 251));
		}
	}
			
	class MouseExits extends MouseAdapter{
		public void mouseExited(MouseEvent e){
			clearButton.setBackground(new Color(205, 193, 197));
		}
	}
	
	class GainFocus extends FocusAdapter{
		public void focusGained(FocusEvent e){
			printButton.setBackground(new Color(211, 211, 251));
		}
	}
		
	class LoseFocus extends FocusAdapter{
		public void focusLost(FocusEvent e){
			printButton.setBackground(new Color(205, 193, 197));
		}
	}

}

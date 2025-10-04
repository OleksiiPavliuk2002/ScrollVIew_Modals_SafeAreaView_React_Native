import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", description: "Description for Card 1" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 4, title: "Card 4", description: "Description for Card 4" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={styles.card}
            onPress={() => {
              setModalVisible(true);
              setSelectedCard(card);
            }}
          >
            <Text>{card.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <SafeAreaView style={styles.safeareaview}>
          <View style={styles.view}>

            {selectedCard && (
              <>
                <Text style={{ fontWeight: "bold", fontSize: 22 }}>{selectedCard.title}</Text>
                <Text style={{fontStyle: 'italic', fontSize: 16}}>{selectedCard.description}</Text>
              </>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false),
                setSelectedCard(null);
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    margin: 50,
  },
  safeareaview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  view: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
});

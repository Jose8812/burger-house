
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá! 👋
        </Text>

        <Text style={styles.title}>
          O que deseja comer hoje?
        </Text>

        <Text style={styles.subtitle}>
          Bem-vindo ao Burger House!
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.offer}>
          🔥 COMBO ESPECIAL
        </Text>

        <Text style={styles.bannerTitle}>
          Combo Burger House
        </Text>

        <Text style={styles.bannerText}>
          🍔 Hambúrguer + 🍟 Batata frita
        </Text>

        <Text style={styles.bannerText}>
          🥤 Bebida gelada para acompanhar!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Peça agora →
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        Nossas categorias
      </Text>

      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.category}
          activeOpacity={0.8}
        >
          <Text style={styles.emoji}>🍔</Text>
          <Text style={styles.categoryText}>
            Hambúrgueres
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          activeOpacity={0.8}
        >
          <Text style={styles.emoji}>🍟</Text>
          <Text style={styles.categoryText}>
            Batatas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          activeOpacity={0.8}
        >
          <Text style={styles.emoji}>🥤</Text>
          <Text style={styles.categoryText}>
            Bebidas
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.comboInfo}>
        <Text style={styles.comboTitle}>
          Seu lanche completo! 😋
        </Text>

        <Text style={styles.comboDescription}>
          Reúna seus favoritos em um só pedido
          e aproveite o sabor do Burger House.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 16,
    color: "#666666",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
    marginTop: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#777777",
    marginTop: 8,
  },

  banner: {
    backgroundColor: "#FE8C00",
    borderRadius: 20,
    padding: 25,
  },

  offer: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },

  bannerTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },

  bannerText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "#FE8C00",
    fontWeight: "bold",
    fontSize: 15,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222",
    marginTop: 30,
    marginBottom: 15,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  category: {
    width: "31%",
    backgroundColor: "#FFF3E6",
    paddingVertical: 18,
    paddingHorizontal: 3,
    borderRadius: 15,
    alignItems: "center",
  },

  emoji: {
    fontSize: 30,
    marginBottom: 8,
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },

  comboInfo: {
    marginTop: 30,
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#FFF3E6",
    borderRadius: 15,
  },

  comboTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333333",
  },

  comboDescription: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 21,
    marginTop: 8,
  },
});

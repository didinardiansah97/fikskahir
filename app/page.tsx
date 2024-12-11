"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface SubMenuProtein {
  id: string;
  name: string;
  Menu_protein: string[];
}

export default function Home() {
  const [formData, setFormData] = useState({
    nama: "",
    umur: "",
    Penyakit: "",
  });

  const [selectedMenu, setSelectedMenu] = useState({
    karbohidrat: "1)",
    Menu_karbo: "*",
    protein: "",
    Olahan: "",
    Menu_protein: "",
    sayur: "3)",
    Menu_sayur: "*",
    buah: "4)",
    Menu_buah: "*",
  });

  const [subMenuKarbohidrat, setSubMenuKarbohidrat] = useState<
    { id: string; name: string }[]
  >([]);
  const [subMenuProtein, setSubMenuProtein] = useState<SubMenuProtein[]>([]);
  const [Menu_proteinOptions, setMenu_proteinOptions] = useState<string[]>([]); // Deklarasikan dengan tipe string[]
  const [subMenuSayur, setSubMenuSayur] = useState<
    { id: string; name: string }[]
  >([]);
  const [subMenuBuah, setSubMenuBuah] = useState<
    { id: string; name: string }[]
  >([]);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [result, setResult] = useState<{
    inputData: string;
    menuData: string;
  } | null>(null);

  const sakitOptions = [
    {
      id: "Kekurangan Energi Protein (KEP)",
      name: "Kekurangan Energi Protein (KEP)",
    },
    { id: "hipertensi", name: "Hipertensi" },
    { id: "diabetes", name: "Diabetes" },
    { id: "(GERD)", name: "Gastroesofageal Reflux Disease (GERD)" },
    { id: "diare", name: "Diare" },
  ];

  interface GiziOption {
    Karbohidrat: {
      id: string;
      name: string;
      subOptions: { id: string; name: string }[];
    }[];
    Protein: {
      id: string;
      name: string;
      subOptions: { id: string; name: string; Menu_protein: string[] }[];
    }[];
    Sayur: {
      id: string;
      name: string;
      subOptions: { id: string; name: string }[];
    }[];
    Buah: {
      id: string;
      name: string;
      subOptions: { id: string; name: string }[];
    }[]; // Baris yang diperbarui
  }

  const giziOptions: Record<string, GiziOption> = {
    "Kekurangan Energi Protein (KEP)": {
      Karbohidrat: [
        {
          id: "ubi",
          name: "Ubi Jalar",
          subOptions: [{ id: "ubi Rebus", name: "Ubi Jalar Rebus" }],
        },
        {
          id: "beras Putih",
          name: "Beras Putih",
          subOptions: [{ id: "nasi Putih", name: "Nasi Putih" }],
        },
        {
          id: "makaroni",
          name: "Makaroni",
          subOptions: [{ id: "makaroni Rebus", name: "Makaroni Rebus" }],
        },
      ],
      Protein: [
        {
          id: "ayam",
          name: "Protein Hewani",
          subOptions: [
            {
              id: "ayamBakar",
              name: "Ayam",
              Menu_protein: ["Ayam Bakar Kecap"],
            },
            {
              id: "Ikan tuna",
              name: "Ikan Tuna",
              Menu_protein: ["Ikan Tuna Bakar"],
            },
            {
              id: "Daging Sapi",
              name: "Daging Sapi",
              Menu_protein: ["Rolade daging kukus"],
            },
          ],
        },
        {
          id: "Protein Nabati",
          name: "Protein Nabati",
          subOptions: [
            {
              id: "Tempe",
              name: "Tempe",
              Menu_protein: ["Tempe Bacem"],
            },
            {
              id: "Tahu",
              name: "Tahu",
              Menu_protein: ["Tahu kukus Sayur"],
            },
            {
              id: "buncis",
              name: "buncis",
              Menu_protein: ["orak orik buncis"],
            },
          ],
        },
      ],
      Sayur: [
        {
          id: "bayam",
          name: "Bayam",
          subOptions: [
            { id: "sayur Bening Bayam", name: "Sayur Bening Bayam" },
          ],
        },
        {
          id: "labu Siam",
          name: "Labu Siam",
          subOptions: [
            { id: "sup Labu Siam Tahu", name: "Sup Labu Siam dan Tahu" },
          ],
        },
        {
          id: "wortel",
          name: "Wortel",
          subOptions: [{ id: "sup Wortel", name: "Sup Wortel" }],
        },
      ],
      Buah: [
        {
          id: "alpukat",
          name: "Alpukat",
          subOptions: [{ id: "Jus Alpukat", name: "Jus alpukat" }],
        },
        {
          id: "pisang",
          name: "Pisang",
          subOptions: [{ id: "pisang potong", name: "pisang potong" }],
        },
        {
          id: "pir",
          name: "Pir",
          subOptions: [{ id: "pir", name: "Jus pir" }],
        },
      ],
    },

    hipertensi: {
      Karbohidrat: [
        {
          id: "beras Putih",
          name: "Beras Putih",
          subOptions: [{ id: "nasi Putih", name: "Nasi Putih" }],
        },
        {
          id: "kentang",
          name: "Kentang",
          subOptions: [
            {
              id: "kentang Kukus Tanpa Garam",
              name: "Kentang Kukus Tanpa Garam",
            },
          ],
        },
        {
          id: "singkong",
          name: "Singkong",
          subOptions: [
            {
              id: "singkong Rebus Tanpa Garam",
              name: "Singkong Rebus Tanpa Garam",
            },
          ],
        },
      ],
      Protein: [
        {
          id: "Protein Hewani",
          name: "Protein Hewani",
          subOptions: [
            {
              id: "Ikan Kembung",
              name: "Ikan Kembung",
              Menu_protein: ["Ikan Kembung Goreng"],
            },
            {
              id: "Ayam Tanpa Kulit",
              name: "Ayam Tanpa Kulit",
              Menu_protein: ["Ayam Panggang Bagian dada"],
            },
            {
              id: "Daging Sapi",
              name: "Daging Sapi",
              Menu_protein: ["Rolade daging kukus"],
            },
          ],
        },
        {
          id: "Protein Nabati",
          name: "Protein Nabati",
          subOptions: [
            {
              id: "Kacang hijau",
              name: "Kacang Hijau",
              Menu_protein: ["Bakwan kacang hijau"],
            },
            {
              id: "Kacang tanah",
              name: "Kacang Tanah",
              Menu_protein: ["Sambal Kacang"],
            },
            {
              id: "Kacang merah",
              name: "Kacang merah",
              Menu_protein: ["Sup kacang merah"],
            },
          ],
        },
      ],
      Sayur: [
        {
          id: "sawi Putih",
          name: "Sawi Putih",
          subOptions: [{ id: "tumis Sawi Putih", name: "Tumis Sawi Putih" }],
        },
        {
          id: "labu Kuning",
          name: "Labu Kuning",
          subOptions: [
            { id: "sup Labu Kuning Bening", name: "Sup Labu Kuning Bening" },
          ],
        },
        {
          id: "brokoli",
          name: "Brokoli",
          subOptions: [{ id: "Sup Brokoli", name: "Sup Brokoli" }],
        },
      ],
      Buah: [
        {
          id: "mangga",
          name: "Mangga",
          subOptions: [{ id: "Mangga Potong", name: "Mangga Potong" }],
        },
        {
          id: "melon",
          name: "Melon",
          subOptions: [{ id: "Melon Potong", name: "Melon Potong" }],
        },
        {
          id: "apel",
          name: "Apel",
          subOptions: [{ id: "Apel Potong", name: "Apel Potong" }],
        },
      ],
    },

    diabetes: {
      Karbohidrat: [
        {
          id: "beras Merah",
          name: "Beras Merah",
          subOptions: [{ id: "nasi Merah", name: "Nasi Merah" }],
        },
        {
          id: "kentang",
          name: "Kentang",
          subOptions: [{ id: "kentang Kukus", name: "Kentang Kukus" }],
        },
        {
          id: "ubi Jalar",
          name: "Ubi Jalar",
          subOptions: [{ id: "ubi Rebus", name: "Ubi Rebus" }],
        },
      ],
      Protein: [
        {
          id: "ayam",
          name: "Protein Hewani",
          subOptions: [
            {
              id: "Ikan lele",
              name: "Ikan lele",
              Menu_protein: ["Ikan pepes kemangi"],
            },
            {
              id: "Daging rendah lemak",
              name: "Daging rendah lemak",
              Menu_protein: ["Tumis daging cabai hijau"],
            },
            {
              id: "Ayam tanpa kulit",
              name: "Ayam tanpa kulit",
              Menu_protein: ["Ayam kukus jahe"],
            },
          ],
        },
        {
          id: "Protein Nabati",
          name: "Protein Nabati",
          subOptions: [
            {
              id: "Tahu",
              name: "Tahu",
              Menu_protein: ["Tahu masak jamur"],
            },
            {
              id: "Tempe ",
              name: "Tempe ",
              Menu_protein: ["Tempe goreng"],
            },
            {
              id: "Kacang merah",
              name: "Kacang merah",
              Menu_protein: ["Kacang merah rebus"],
            },
          ],
        },
      ],
      Sayur: [
        {
          id: "kangkung",
          name: "Kangkung",
          subOptions: [
            { id: "Sayur Bening Kangkung", name: "Sayur Bening Kangkung" },
          ],
        },
        {
          id: "kol",
          name: "Kol",
          subOptions: [
            { id: "Sayur Sup Kol Tomat", name: "Sayur Sup Kol Tomat" },
          ],
        },
        {
          id: "bayam",
          name: "Bayam",
          subOptions: [
            { id: "Sayur Bening Bayam", name: "Sayur Bening Bayam" },
          ],
        },
      ],
      Buah: [
        {
          id: "jeruk",
          name: "Jeruk",
          subOptions: [{ id: "Jeruk Kupas", name: "Jeruk Kupas" }],
        },
        {
          id: "semangka",
          name: "Semangka",
          subOptions: [{ id: "Semangka Potong", name: "Semangka Potong" }],
        },
        {
          id: "pepaya",
          name: "Pepaya",
          subOptions: [{ id: "Pepaya Potong", name: "Pepaya Potong" }],
        },
      ],
    },

    "(GERD)": {
      Karbohidrat: [
        {
          id: "Beras Merah",
          name: "Beras Merah",
          subOptions: [{ id: "Nasi Merah", name: "Nasi Merah" }],
        },
        {
          id: "kentang",
          name: "Kentang",
          subOptions: [{ id: "Kentang Kukus", name: "Kentang Kukus" }],
        },
        {
          id: "Ubi Jalar",
          name: "Ubi Jalar",
          subOptions: [{ id: "Ubi Rebus", name: "Ubi Rebus" }],
        },
      ],
      Protein: [
        {
          id: "ayam",
          name: "Protein Hewani",
          subOptions: [
            {
              id: "Telur",
              name: "Telur",
              Menu_protein: ["Telur Rebus"],
            },
            {
              id: "Aayam",
              name: "Ayam",
              Menu_protein: ["Sup ayam wortel"],
            },
            {
              id: "IKan Tongkol",
              name: "IKan Tongkol",
              Menu_protein: ["Ikan masak kuning"],
            },
          ],
        },
        {
          id: "Protein Nabati",
          name: "Protein Nabati",
          subOptions: [
            {
              id: "Tempe",
              name: "Tempe",
              Menu_protein: ["Tempe Kukus"],
            },
            {
              id: "Tahu",
              name: "Tahu",
              Menu_protein: ["Pepes Tahu Wortel (Tanpa Bumbu)"],
            },
          ],
        },
      ],
      Sayur: [
        {
          id: "kangkung",
          name: "Kangkung",
          subOptions: [
            { id: "Sayur Bening Kangkung", name: "Sayur Bening Kangkung" },
          ],
        },
        {
          id: "kol",
          name: "Kol",
          subOptions: [
            { id: "Sayur Sup Kol Tomat", name: "Sayur Sup Kol Tomat" },
          ],
        },
        {
          id: "bayam",
          name: "Bayam",
          subOptions: [
            { id: "Sayur Bening Bayam", name: "Sayur Bening Bayam" },
          ],
        },
      ],
      Buah: [
        {
          id: "alpukat",
          name: "Alpukat",
          subOptions: [{ id: "jusal pukat", name: "Jus alpukat" }],
        },
        {
          id: "pisang",
          name: "Pisang",
          subOptions: [{ id: "pisang potong", name: "pisang potong" }],
        },
        {
          id: "pir",
          name: "Pir",
          subOptions: [{ id: "pir", name: "Jus pir" }],
        },
      ],
    },
    diare: {
      Karbohidrat: [
        {
          id: "berasPutih",
          name: "Beras Putih",
          subOptions: [{ id: "bubur Saring", name: "Bubur Saring" }],
        },
        {
          id: "kentang",
          name: "Kentang",
          subOptions: [
            { id: "kentang Kukus Pure", name: "Kentang Kukus di Pure" },
          ],
        },
        {
          id: "bihun",
          name: "Bihun",
          subOptions: [{ id: "bihun Rebus", name: "Bihun Rebus" }],
        },
      ],

      Protein: [
        {
          id: "ayam",
          name: "Protein Hewani",
          subOptions: [
            {
              id: "Hati ayam",
              name: "Hati Ayam",
              Menu_protein: ["Sup hati ayam"],
            },
            {
              id: "Telur ",
              name: "Telur",
              Menu_protein: ["Telur Rebus"],
            },
            {
              id: "Ikan tuna giling",
              name: "Ikan tuna giling",
              Menu_protein: ["Ikan pepes (tanpa bumbu)"],
            },
          ],
        },
        {
          id: "Protein Nabati",
          name: "Protein Nabati",
          subOptions: [
            {
              id: "Tempe",
              name: "Tempe",
              Menu_protein: ["Tempe Kukus"],
            },
            {
              id: "Tahu",
              name: "Tahu",
              Menu_protein: ["Pepes Tahu Wortel (Tanpa Bumbu)"],
            },
          ],
        },
      ],

      Sayur: [
        {
          id: "tomat",
          name: "Tomat",
          subOptions: [{ id: "jusTomat", name: "Jus Tomat" }],
        },
        {
          id: "wortel",
          name: "Wortel",
          subOptions: [{ id: "jusWortel", name: "Jus Wortel" }],
        },
        {
          id: "mentimun",
          name: "Mentimun",
          subOptions: [{ id: "jusMentimun", name: "Jus Mentimun" }],
        },
      ],
      Buah: [
        {
          id: "apel",
          name: "Apel",
          subOptions: [{ id: "jusApel", name: "Jus Apel" }],
        },
        {
          id: "pisang",
          name: "Pisang",
          subOptions: [{ id: "jusPisang", name: "Jus Pisang" }],
        },
        {
          id: "melon",
          name: "Melon",
          subOptions: [{ id: "jusMelon", name: "Jus Melon" }],
        },
      ],
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMenuSelect = (type: string, value: string) => {
    setSelectedMenu((prev) => ({ ...prev, [type]: value }));

    if (type === "karbohidrat") {
      const selectedOption = giziOptions[formData.Penyakit]?.Karbohidrat.find(
        (item) => item.id === "1"
      );
      setSubMenuKarbohidrat(selectedOption?.subOptions || []);
      setSelectedMenu((prev) => ({ ...prev, Menu_karbo: "" }));
    }

    if (type === "protein") {
      const selectedOption = giziOptions[formData.Penyakit]?.Protein.find(
        (item) => item.id === value
      );
      setSubMenuProtein(selectedOption?.subOptions || []);
      setSelectedMenu((prev) => ({ ...prev, Olahan: "", Menu_protein: "" })); // Reset dropdown berikutnya
    }

    if (type === "Olahan") {
      const selectedSubOption = subMenuProtein.find(
        (item) => item.id === value
      );
      setMenu_proteinOptions(selectedSubOption?.Menu_protein || []);
      setSelectedMenu((prev) => ({ ...prev, Menu_protein: "" })); // Reset dropdown terakhir
    }

    if (type === "sayur") {
      const selectedOption = giziOptions[formData.Penyakit]?.Sayur.find(
        (item) => item.id === value
      );
      setSubMenuSayur(selectedOption?.subOptions || []);
      setSelectedMenu((prev) => ({ ...prev, Menu_sayur: "" }));
    }

    if (type === "buah") {
      const selectedOption = giziOptions[formData.Penyakit]?.Buah.find(
        (item) => item.id === value
      );
      setSubMenuBuah(selectedOption?.subOptions || []);
      setSelectedMenu((prev) => ({ ...prev, Menu_buah: "" }));
    }
  };

  const handleSubmit = () => {
    const inputData = JSON.stringify(formData, null, 2);
    const menuData = JSON.stringify(selectedMenu, null, 2);
    setResult({ inputData, menuData });
  };

  const isFormComplete = formData.nama && formData.umur && formData.Penyakit;

  const isMenuComplete =
    selectedMenu.karbohidrat &&
    selectedMenu.protein &&
    selectedMenu.Olahan &&
    selectedMenu.Menu_protein &&
    selectedMenu.sayur &&
    selectedMenu.buah &&
    (!subMenuKarbohidrat.length || selectedMenu.Menu_karbo) &&
    (!subMenuSayur.length || selectedMenu.Menu_sayur) &&
    (!subMenuBuah.length || selectedMenu.Menu_buah);

  // Logika untuk memastikan bahwa semua menu utama dan sub-menu telah dipilih
  if (isMenuComplete) {
    console.log("Semua menu telah dipilih dengan lengkap");
  } else {
    console.log("Ada menu yang belum dipilih");
  }

  return (
    <div
      className="container-fluid"
      style={{ padding: "2rem 1rem", backgroundColor: "#f9f9f9" }}
    >
      <h1
        className="text-center mb-4 text-primary"
        style={{ fontWeight: "bold" }}
      >
        Rekomendasi Menu Berdasarkan Penyakit yang Diderita
      </h1>
      <div className="card shadow-lg mb-4" style={{ borderRadius: "1rem" }}>
        <div className="card-body">
          <h2
            className="card-title text-secondary"
            style={{ fontSize: "1.5rem", fontWeight: "600" }}
          >
            Input Data
          </h2>

          {/* Input Nama */}
          <div className="mb-4">
            <label
              className="form-label text-secondary"
              style={{ fontWeight: "500" }}
            >
              Nama:
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              className="form-control shadow-sm"
              placeholder="Masukkan nama Anda"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>

          {/* Input Umur */}
          <div className="mb-4">
            <label
              className="form-label text-secondary"
              style={{ fontWeight: "500" }}
            >
              Umur:
            </label>
            <input
              type="number"
              name="umur"
              value={formData.umur}
              onChange={handleInputChange}
              className="form-control shadow-sm"
              placeholder="Masukkan umur Anda"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>

          {/* Input Penyakit */}
          <div className="mb-4">
            <label
              className="form-label text-secondary"
              style={{ fontWeight: "500" }}
            >
              Penyakit:
            </label>
            <select
              name="Penyakit"
              value={formData.Penyakit}
              onChange={handleInputChange}
              className="form-select shadow-sm"
              style={{ borderRadius: "0.5rem" }}
            >
              <option value="">Pilih Penyakit</option>
              {sakitOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tombol Tampilkan Menu */}
          <div className="text-center">
            <button
              onClick={() => setShowMenuOptions(!showMenuOptions)}
              className="btn btn-primary btn-lg shadow-sm"
              style={{ borderRadius: "0.5rem", padding: "0.75rem 2rem" }}
              disabled={!isFormComplete}
            >
              {showMenuOptions ? "Sembunyikan Menu" : "Tampilkan Menu"}
            </button>
          </div>
          <br />

          {/* Dropdown Protein */}
          {showMenuOptions && formData.Penyakit && (
            <div className="container p-4 bg-white rounded shadow-sm border border-primary">
              <h3 className="text-center mb-4 text-primary">Pilih Menu Gizi</h3>
              <p className="text-center text-muted">
                Pilih menu berdasarkan kebutuhan gizi untuk mendapatkan
                rekomendasi terbaik.
              </p>

              {/* Dropdown 1: Karbohidrat */}
              <div className="mb-4">
                <label className="form-label d-flex align-items-center">
                  <i className="bi bi-basket-fill me-2 text-warning"></i>{" "}
                  Karbohidrat:
                </label>
                <select
                  className="form-select border-warning"
                  onChange={(e) =>
                    handleMenuSelect("karbohidrat", e.target.value)
                  }
                >
                  <option value="">Pilih Karbohidrat</option>
                  {giziOptions[formData.Penyakit]?.Karbohidrat.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedMenu.karbohidrat &&
                giziOptions[formData.Penyakit]?.Karbohidrat?.find(
                  (k) => k.id === selectedMenu.karbohidrat
                )?.subOptions?.length && (
                  <div className="ms-4 mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="bi bi-gear-wide-connected me-2 text-secondary"></i>{" "}
                      Olahan menu:
                    </label>
                    <select
                      className="form-select border-secondary"
                      onChange={(e) =>
                        handleMenuSelect("Menu_karbo", e.target.value)
                      }
                    >
                      <option value="">Olahan menu</option>
                      {giziOptions[formData.Penyakit]?.Karbohidrat?.find(
                        (k) => k.id === selectedMenu.karbohidrat
                      )?.subOptions?.map((subOption) => (
                        <option key={subOption.id} value={subOption.id}>
                          {subOption.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

              {/* Dropdown 2: Protein */}
              <div className="mb-4">
                <label className="form-label d-flex align-items-center">
                  <i className="bi bi-egg-fried me-2 text-success"></i> Protein:
                </label>
                <select
                  className="form-select border-success"
                  onChange={(e) => handleMenuSelect("protein", e.target.value)}
                >
                  <option value="">Pilih Jenis Protein</option>
                  {giziOptions[formData.Penyakit]?.Protein.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedMenu.protein && (
                <div className="mb-4 ms-4">
                  <label className="form-label d-flex align-items-center">
                    <i className="bi bi-meat me-2 text-danger"></i> Bahan Menu:
                  </label>
                  <select
                    className="form-select border-danger"
                    onChange={(e) =>
                      handleMenuSelect("Olahan", e.target.value)
                    }
                  >
                    <option value="">Pilih Bahan Menu</option>
                    {subMenuProtein.map((subOption) => (
                      <option key={subOption.id} value={subOption.id}>
                        {subOption.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {selectedMenu.Olahan && (
                <div className="mb-4 ms-4">
                  <label className="form-label d-flex align-items-center">
                    <i className="bi bi-meat me-2 text-danger"></i> Olahan Menu:
                  </label>
                  <select
                    className="form-select border-danger"
                    onChange={(e) =>
                      setSelectedMenu((prev) => ({
                        ...prev,
                        Menu_protein: e.target.value,
                      }))
                    }
                  >
                    <option value="">Olaham menu</option>
                    {Menu_proteinOptions.map((method, index) => (
                      <option key={index} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Dropdown 3: Sayur */}
              <div className="mb-4">
                <label className="form-label d-flex align-items-center">
                  <i className="bi bi-leaf me-2 text-primary"></i> Sayur:
                </label>
                <select
                  className="form-select border-primary"
                  onChange={(e) => handleMenuSelect("sayur", e.target.value)}
                >
                  <option value="">Pilih Sayur</option>
                  {giziOptions[formData.Penyakit]?.Sayur.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedMenu.sayur &&
                giziOptions[formData.Penyakit]?.Sayur?.find(
                  (s) => s.id === selectedMenu.sayur
                )?.subOptions?.length && (
                  <div className="ms-4 mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="bi bi-gear-wide-connected me-2 text-secondary"></i>{" "}
                      Olahan menu:
                    </label>
                    <select
                      className="form-select border-secondary"
                      onChange={(e) =>
                        handleMenuSelect("Menu_sayur", e.target.value)
                      }
                    >
                      <option value="">Olahan menu</option>
                      {giziOptions[formData.Penyakit]?.Sayur?.find(
                        (s) => s.id === selectedMenu.sayur
                      )?.subOptions?.map((subOption) => (
                        <option key={subOption.id} value={subOption.id}>
                          {subOption.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

              {/* Dropdown 4: Buah */}
              <div className="mb-4">
                <label className="form-label d-flex align-items-center">
                  <i className="bi bi-apple me-2 text-warning"></i> Buah:
                </label>
                <select
                  className="form-select border-warning"
                  onChange={(e) => handleMenuSelect("buah", e.target.value)}
                >
                  <option value="">Pilih Buah</option>
                  {giziOptions[formData.Penyakit]?.Buah.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedMenu.buah &&
                giziOptions[formData.Penyakit]?.Buah?.find(
                  (b) => b.id === selectedMenu.buah
                )?.subOptions?.length && (
                  <div className="ms-4 mb-4">
                    <label className="form-label d-flex align-items-center">
                      <i className="bi bi-gear-wide-connected me-2 text-secondary"></i>{" "}
                      Olahan menu:
                    </label>
                    <select
                      className="form-select border-secondary"
                      onChange={(e) =>
                        handleMenuSelect("Menu_buah", e.target.value)
                      }
                    >
                      <option value="">Olahan menu</option>
                      {giziOptions[formData.Penyakit]?.Buah?.find(
                        (b) => b.id === selectedMenu.buah
                      )?.subOptions?.map((subOption) => (
                        <option key={subOption.id} value={subOption.id}>
                          {subOption.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

              {/* Tombol Submit */}
              <div className="text-center mt-4">
                <button
                  onClick={handleSubmit}
                  className="btn btn-success btn-lg px-5"
                  disabled={!isMenuComplete}
                >
                  <i className="bi bi-check-circle me-2"></i> Submit
                </button>
              </div>
            </div>
          )}

          {/* Hasil Input dan Menu */}
          {result && (
            <div className="mt-4">
              {/* Card untuk Hasil Input */}
              <div
                className="card shadow-lg mb-4"
                style={{
                  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <div className="card-body">
                  <h3
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Hasil Input
                  </h3>
                  <pre
                    className="bg-light text-dark p-4 rounded shadow-sm"
                    style={{
                      fontSize: "clamp(14px, 1.8vw, 18px)",
                      borderLeft: "5px solid #6a11cb",
                    }}
                  >
                    {Object.entries(formData).map(([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>

              {/* Card untuk Hasil Menu */}
              <div
                className="card shadow-lg mb-4"
                style={{
                  background: "linear-gradient(135deg, #11998e, #38ef7d)",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <div className="card-body">
                  <h3
                    className="card-title text-center text-white"
                    style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  >
                    Hasil Menu
                  </h3>
                  <pre
                    className="bg-light text-dark p-4 rounded shadow-sm"
                    style={{
                      fontSize: "clamp(14px, 1.8vw, 18px)",
                      borderLeft: "5px solid #11998e",
                    }}
                  >
                    {Object.entries(selectedMenu).map(([key, value]) => (
                      <div key={key}>
                        <strong>{key}:</strong> {value}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

        "use client";

        import React, { useState } from "react";
        import "bootstrap/dist/css/bootstrap.min.css";

        export default function Home() {
        const [formData, setFormData] = useState({
            nama: "",
            umur: "",
            Penyakit: "",
        });

        const [selectedMenu, setSelectedMenu] = useState({
            karbohidrat: "1)",
            subKarbohidrat: "*",
            protein: "",
            subProtein: "",
            caraMasak: "",
            sayur: "3)",
            subSayur: "*",
            buah: "4)",
            subBuah: "*",
        });

        const [subMenuKarbohidrat, setSubMenuKarbohidrat] = useState<{ id: string; name: string }[]>([]);
        const [subMenuProtein, setSubMenuProtein] = useState([]);
        const [caraMasakOptions, setCaraMasakOptions] = useState([]);
        const [subMenuSayur, setSubMenuSayur] = useState<{ id: string; name: string }[]>([]);
        const [subMenuBuah, setSubMenuBuah] = useState<{ id: string; name: string }[]>([]);
        const [showMenuOptions, setShowMenuOptions] = useState(false);
        const [result, setResult] = useState<{ inputData: string; menuData: string } | null>(null);

        
        const sakitOptions = [
            { id: "(KEP)", name: "Kekurangan Energi Protein (KEP)" },
            { id: "hipertensi", name: "Hipertensi" },
            { id: "diabetes", name: "Diabetes" },
            { id: "(GERD)", name: "Gastroesofageal Reflux Disease (GERD)" },
            { id: "diare", name: "Diare" },
        ];

        interface GiziOption {
            Karbohidrat: { id: string; name: string; subOptions: { id: string; name: string }[] }[];
            Protein: { id: string; name: string; subOptions: { id: string; name: string; caraMasak: string[] }[] }[];
            Sayur: { id: string; name: string; subOptions: { id: string; name: string }[] }[];
            Buah: { id: string; name: string }[];
          }
          
          interface FormData {
            selectedSakit: keyof GiziOption; // Kunci dari GiziOption yang sesuai dengan pilihan sakit
          }

          const giziOptions: Record<string, GiziOption> = {
            "(KEP)": {
            Karbohidrat: [
                { id: "ubi", name: "Ubi Jalar", subOptions: [{ id: "ubi Rebus", name: "Ubi Jalar Rebus" }] },
                { id: "beras Putih", name: "Beras Putih", subOptions: [{ id: "nasi Putih", name: "Nasi Putih" }] },
                { id: "makaroni", name: "Makaroni", subOptions: [{ id: "makaroni Rebus", name: "Makaroni Rebus" }] },
                ],
            Protein: [
                {
                id: "ayam",
                name: "Protein Hewani",
                subOptions: [
                    {
                    id: "ayamBakar",
                    name: "Ayam",
                    caraMasak: ["Ayam Bakar Kecap"],
                    },
                    {
                    id: "Ikan tuna",
                    name: "Ikan Tuna",
                    caraMasak: ["Ikan Tuna Bakar"],
                    },
                    {
                    id: "Daging Sapi",
                    name: "Daging Sapi",
                    caraMasak: ["Rolade daging kukus"],
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
                    caraMasak: ["Tempe Bacem"],
                    },
                    {
                    id: "Tahu",
                    name: "Tahu",
                    caraMasak: ["Tahu kukus Sayur"],
                    },
                    {
                    id: "buncis",
                    name: "buncis",
                    caraMasak: ["orak orik buncis"],
                    },
                ],
                },
            ],
            Sayur: [
                { id: "bayam", name: "Bayam", subOptions: [{ id: "sayur Bening Bayam", name: "Sayur Bening Bayam" }] },
                { id: "labu Siam", name: "Labu Siam", subOptions: [{ id: "sup Labu Siam Tahu", name: "Sup Labu Siam dan Tahu" }] },
                { id: "wortel", name: "Wortel", subOptions: [{ id: "sup Wortel", name: "Sup Wortel" }] },
            ],
            Buah: [
                { id: "alpukat", name: "Alpukat", subOptions: [{ id: "jusal pukat", name: "Jus alpukat" }] },
                { id: "pisang", name: "Pisang", subOptions: [{ id: "pisang potong", name: "pisang potong" }] },
                { id: "pir", name: "Pir", subOptions: [{ id: "pir", name: "Jus pir" }] }
            ],
            },

            hipertensi: {
                Karbohidrat: [
                { id: "beras Putih", name: "Beras Putih", subOptions: [{ id: "nasi Putih", name: "Nasi Putih" }] },
                { id: "kentang", name: "Kentang", subOptions: [{ id: "kentang Kukus TanpaGaram", name: "Kentang Kukus Tanpa Garam" }] },
                { id: "singkong", name: "Singkong", subOptions: [{ id: "singkong Rebus TanpaGaram", name: "Singkong Rebus Tanpa Garam" }] },
                ],
                Protein: [
                    {
                    id: "Protein Hewani",
                    name: "Protein Hewani",
                    subOptions: [
                        {
                        id: "Ikan Kembung",
                        name: "Ikan Kembung",
                        caraMasak: ["Ikan Kembung Goreng"],
                        },
                        {
                        id: "Ayam Tanpa Kulit",
                        name: "Ayam Tanpa Kulit",
                        caraMasak: ["Ayam Panggang Bagian dada"],
                        },
                        {
                        id: "Daging Sapi",
                        name: "Daging Sapi",
                        caraMasak: ["Rolade daging kukus"],
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
                        caraMasak: ["Bakwan kacang hijau"],
                        },
                        {
                        id: "Kacang tanah",
                        name: "Kacang Tanah",
                        caraMasak: ["Sambal Kacang"],
                        },
                        {
                        id: "Kacang merah",
                        name: "Kacang merah",
                        caraMasak: ["Sup kacang merah"],
                        },
                    ],
                    },
                ],
                Sayur: [
                { id: "sawi Putih", name: "Sawi Putih", subOptions: [{ id: "tumis Sawi Putih", name: "Tumis Sawi Putih" }] },
                    { id: "labu Kuning", name: "Labu Kuning", subOptions: [{ id: "sup Labu Kuning Bening", name: "Sup Labu Kuning Bening" }] },
                    { id: "brokoli", name: "Brokoli", subOptions: [{ id: "Sup Brokoli", name: "Sup Brokoli" }] },
                ],
                Buah: [
                { id: "mangga", name: "Mangga", subOptions: [{ id: "Mangga Potong", name: "Mangga Potong" }] },
                    { id: "melon", name: "Melon", subOptions: [{ id: "Melon Potong", name: "Melon Potong" }] },
                    { id: "apel", name: "Apel", subOptions: [{ id: "Apel Potong", name: "Apel Potong" }] },
            ],
            },

            diabetes: {
                Karbohidrat: [
                { id: "beras Merah", name: "Beras Merah", subOptions: [{ id: "nasi Merah", name: "Nasi Merah" }] },
                { id: "kentang", name: "Kentang", subOptions: [{ id: "kentang Kukus", name: "Kentang Kukus" }] },
                { id: "ubi Jalar", name: "Ubi Jalar", subOptions: [{ id: "ubi Rebus", name: "Ubi Rebus" }] },
                ],
                Protein: [
                    {
                    id: "ayam",
                    name: "Protein Hewani",
                    subOptions: [
                        {
                        id: "Ikan lele",
                        name: "Ikan lele",
                        caraMasak: ["Ikan pepes kemangi"],
                        },
                        {
                        id: "Daging rendah lemak",
                        name: "Daging rendah lemak",
                        caraMasak: ["Tumis daging cabai hijau"],
                        },
                        {
                        id: "Ayam tanpa kulit",
                        name: "Ayam tanpa kulit",
                        caraMasak: ["Ayam kukus jahe"],
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
                        caraMasak: ["Tahu masak jamur"],
                        },
                        {
                        id: "Tempe ",
                        name: "Tempe ",
                        caraMasak: ["Tempe goreng"],
                        },
                        {
                        id: "Kacang merah",
                        name: "Kacang merah",
                        caraMasak: ["Kacang merah rebus"],
                        },
                    ],
                    },
                ],
                Sayur: [
                { id: "kangkung", name: "Kangkung", subOptions: [{ id: "Sayur Bening Kangkung", name: "Sayur Bening Kangkung" }] },
                { id: "kol", name: "Kol", subOptions: [{ id: "Sayur Sup Kol Tomat", name: "Sayur Sup Kol Tomat" }] },
                { id: "bayam", name: "Bayam", subOptions: [{ id: "Sayur Bening Bayam", name: "Sayur Bening Bayam" }] },
                ],
                Buah: [
                { id: "jeruk", name: "Jeruk", subOptions: [{ id: "Jeruk Kupas", name: "Jeruk Kupas" }] },
                { id: "semangka", name: "Semangka", subOptions: [{ id: "Semangka Potong", name: "Semangka Potong" }] },
                { id: "pepaya", name: "Pepaya", subOptions: [{ id: "Pepaya Potong", name: "Pepaya Potong" }] },
                ],
            },

            "(GERD)": {
            Karbohidrat: [
            { id: "Beras Merah", name: "Beras Merah", subOptions: [{ id: "Nasi Merah", name: "Nasi Merah" }] },
            { id: "kentang", name: "Kentang", subOptions: [{ id: "Kentang Kukus", name: "Kentang Kukus" }] },
            { id: "Ubi Jalar", name: "Ubi Jalar", subOptions: [{ id: "Ubi Rebus", name: "Ubi Rebus" }] },
            ],
            Protein: [
                {
                id: "ayam",
                name: "Protein Hewani",
                subOptions: [
                    {
                    id: "Telur",
                    name: "Telur",
                    caraMasak: ["Telur Rebus"],
                    },
                    {
                    id: "Aayam",
                    name: "Ayam",
                    caraMasak: ["Sup ayam wortel"],
                    },
                    {
                    id: "IKan Tongkol",
                    name: "IKan Tongkol",
                    caraMasak: ["Ikan masak kuning"],
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
                    caraMasak: ["Tempe Kukus"],
                    },
                    {
                    id: "Tahu",
                    name: "Tahu",
                    caraMasak: ["Pepes Tahu Wortel (Tanpa Bumbu)"],
                    },
                ],
                },
            ],
            Sayur: [
            { id: "kangkung", name: "Kangkung", subOptions: [{ id: "Sayur Bening Kangkung", name: "Sayur Bening Kangkung" }] },
            { id: "kol", name: "Kol", subOptions: [{ id: "Sayur Sup KolTomat", name: "Sayur Sup Kol Tomat" }] },
            { id: "bayam", name: "Bayam", subOptions: [{ id: "Sayur Bening Bayam", name: "Sayur Bening Bayam" }] },
            ],
            Buah: [
                { id: "alpukat", name: "Alpukat", subOptions: [{ id: "jusal pukat", name: "Jus alpukat" }] },
                { id: "pisang", name: "Pisang", subOptions: [{ id: "pisang potong", name: "pisang potong" }] },
                { id: "pir", name: "Pir", subOptions: [{ id: "pir", name: "Jus pir" }] }
            ],
            },
            diare: {
                Karbohidrat: [
                    { id: "berasPutih", name: "Beras Putih", subOptions: [{ id: "buburSaring", name: "Bubur Saring" }] },
                    { id: "kentang", name: "Kentang", subOptions: [{ id: "kentangKukusPure", name: "Kentang Kukus di Pure" }] },
                    { id: "bihun", name: "Bihun", subOptions: [{ id: "bihunRebus", name: "Bihun Rebus" }] },
                ],
                
                Protein: [
                    {
                    id: "ayam",
                    name: "Protein Hewani",
                    subOptions: [
                        {
                        id: "Hati ayam",
                        name: "Hati Ayam",
                        caraMasak: ["Sup hati ayam"],
                        },
                        {
                        id: "Telur ",
                        name: "Telur",
                        caraMasak: ["Telur Rebus"],
                        },
                        {
                        id: "Ikan tuna giling",
                        name: "Ikan tuna giling",
                        caraMasak: ["Ikan pepes (tanpa bumbu)"],
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
                        caraMasak: ["Tempe Kukus"],
                        },
                        {
                        id: "Tahu",
                        name: "Tahu",
                        caraMasak: ["Pepes Tahu Wortel (Tanpa Bumbu)"],
                        },
                    ],
                    },
                ],

                Sayur: [
                    { id: "tomat", name: "Tomat", subOptions: [{ id: "jusTomat", name: "Jus Tomat" }] },
                    { id: "wortel", name: "Wortel", subOptions: [{ id: "jusWortel", name: "Jus Wortel" }] },
                    { id: "mentimun", name: "Mentimun", subOptions: [{ id: "jusMentimun", name: "Jus Mentimun" }] },
                ],
                Buah: [
                    { id: "apel", name: "Apel", subOptions: [{ id: "jusApel", name: "Jus Apel" }] },
                    { id: "pisang", name: "Pisang", subOptions: [{ id: "jusPisang", name: "Jus Pisang" }] },
                    { id: "melon", name: "Melon", subOptions: [{ id: "jusMelon", name: "Jus Melon" }] },
                ],
            }
        };

        const formDataMap: { [key: string]: FormData } = {
            KEP: { selectedSakit: "(KEP)" },
            hipertensi: { sakithiper: "hipertensi" },
            diabetes: { selectedSakit: "diabetes" },
            GERD: { selectedSakit: "(GERD)" },
            diare: { selectedSakit: "diare" },
        };
        

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        };

        const handleMenuSelect = (type: string, value: string) => {
            setSelectedMenu((prev) => ({ ...prev, [type]: value }));

            if (type === "karbohidrat") {
                const selectedOption = giziOptions[formData.selectedSakit]?.Karbohidrat.find((item) => item.id === "1");
                setSubMenuKarbohidrat(selectedOption?.subOptions || []);
                setSelectedMenu((prev) => ({ ...prev, subKarbohidrat: "" }));
            }

            if (type === "protein") {
            const selectedOption = giziOptions[formData.selectedSakit]?.Protein.find((item) => item.id === value);
            setSubMenuProtein(selectedOption?.subOptions || []);
            setSelectedMenu((prev) => ({ ...prev, subProtein: "", caraMasak: "" })); // Reset dropdown berikutnya
            }

            if (type === "subProtein") {
            const selectedSubOption = subMenuProtein.find((item) => item.id === value);
            setCaraMasakOptions(selectedSubOption?.caraMasak || []);
            setSelectedMenu((prev) => ({ ...prev, caraMasak: "" })); // Reset dropdown terakhir
            }
            
            if (type === "sayur") {
                const selectedOption = giziOptions[formData.selectedSakit]?.Sayur.find((item) => item.id === value);
                setSubMenuSayur(selectedOption?.subOptions || []);
                setSelectedMenu((prev) => ({ ...prev, subSayur: "" }));
            }
        
            if (type === "buah") {
                const selectedOption = giziOptions[formData.selectedSakit]?.Buah.find((item) => item.id === value);
                setSubMenuBuah(selectedOption?.subOptions || []);
                setSelectedMenu((prev) => ({ ...prev, subBuah: "" }));
            }

        };

        const handleSubmit = () => {
            const inputData = JSON.stringify(formData, null, 2);
            const menuData = JSON.stringify(selectedMenu, null, 2);
            setResult({ inputData, menuData });
        };

        const isFormComplete = 
        formData.nama && formData.umur && formData.selectedSakit;

        const isMenuComplete = 
        selectedMenu.karbohidrat &&
        selectedMenu.protein &&
        selectedMenu.subProtein &&
        selectedMenu.caraMasak &&
        selectedMenu.sayur &&
        selectedMenu.buah &&
        (!subMenuKarbohidrat.length || selectedMenu.subKarbohidrat) &&
        (!subMenuSayur.length || selectedMenu.subSayur) &&
        (!subMenuBuah.length || selectedMenu.subBuah);

        // Logika untuk memastikan bahwa semua menu utama dan sub-menu telah dipilih
        if (isMenuComplete) {
        console.log('Semua menu telah dipilih dengan lengkap');
        } else {
        console.log('Ada menu yang belum dipilih');
        }


        return (
            <div className="container-fluid" style={{ paddingTop: "2rem" }}>
            <h1 className="text-center mb-4">Rekomendasi Menu berdasarkan penyakit yang di derita</h1>
            <div className="card shadow-lg mb-4">
                <div className="card-body">
                <h2 className="card-title">Input Data</h2>

                {/* Input Nama */}
                <div className="mb-3">
                    <label className="form-label">Nama:</label>
                    <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Nama"
                    />
                </div>

                {/* Input Umur */}
                <div className="mb-3">
                    <label className="form-label">Umur:</label>
                    <input
                    type="number"
                    name="umur"
                    value={formData.umur}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Umur"
                    />
                </div>

                {/* Input Penyakit */}
                <div className="mb-3">
                    <label className="form-label">Penyakit:</label>
                    <select
                    name="selectedSakit"
                    value={formData.selectedSakit}
                    onChange={handleInputChange}
                    className="form-select"
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
                <div className="mb-3">
                    <button
                    onClick={() => setShowMenuOptions(!showMenuOptions)}
                    className="btn btn-primary"
                    disabled={!isFormComplete}
                    >
                    {showMenuOptions ? "Sembunyikan Menu" : "Tampilkan Menu"}
                    </button>
                </div>

                {/* Dropdown Protein */}
                {showMenuOptions && formData.selectedSakit && (
                    <div>
                    <h3>Pilih Menu Gizi - Protein</h3>

                    {/* Dropdown 1: Protein */}
                    
                    <div className="mb-3">
                        <label className="form-label">Karbohidrat:</label>
                        <select
                        className="form-select"
                        onChange={(e) => handleMenuSelect("karbohidrat", e.target.value)}
                        >
                        <option value="">Pilih Karbohidrat</option>
                        {giziOptions[formData.selectedSakit]?.Karbohidrat.map((option) => (
                            <option key={option.id} value={option.id}>
                            {option.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    {selectedMenu.karbohidrat &&
                        giziOptions[formData.selectedSakit]?.Karbohidrat?.find(
                        (k) => k.id === selectedMenu.karbohidrat
                        )?.subOptions?.length && (
                        <div className="ms-4">
                            <label className="form-label">Sub Menu Karbohidrat:</label>
                            <select
                            className="form-select"
                            onChange={(e) => handleMenuSelect("subKarbohidrat", e.target.value)}
                            >
                            <option value="">Pilih Sub Menu Karbohidrat</option>
                            {giziOptions[formData.selectedSakit]?.Karbohidrat?.find(
                                (k) => k.id === selectedMenu.karbohidrat
                            )?.subOptions?.map((subOption) => (
                                <option key={subOption.id} value={subOption.id}>
                                {subOption.name}
                                </option>
                            ))}
                            </select>
                        </div>
                        )}
                    
                    <div className="mb-3">
                        <label className="form-label">Jenis Protein:</label>
                        <select
                        className="form-select"
                        onChange={(e) => handleMenuSelect("protein", e.target.value)}
                        >
                        <option value="">Pilih Jenis Protein</option>
                        {giziOptions[formData.selectedSakit]?.Protein.map((option) => (
                            <option key={option.id} value={option.id}>
                            {option.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    {/* Dropdown 2: Objek Menu */}
                    {selectedMenu.protein && (
                        <div className="mb-3 ms-4">
                        <label className="form-label">Objek Menu:</label>
                        <select
                            className="form-select"
                            onChange={(e) => handleMenuSelect("subProtein", e.target.value)}
                        >
                            <option value="">Pilih Objek Menu</option>
                            {subMenuProtein.map((subOption) => (
                            <option key={subOption.id} value={subOption.id}>
                                {subOption.name}
                            </option>
                            ))}
                        </select>
                        </div>
                    )}

                    {/* Dropdown 3: Cara Memasak */}
                    {selectedMenu.subProtein && (
                        <div className="mb-3 ms-4">
                        <label className="form-label">Cara Memasak:</label>
                        <select
                            className="form-select"
                            onChange={(e) => setSelectedMenu((prev) => ({ ...prev, caraMasak: e.target.value }))}
                        >
                            <option value="">Pilih Cara Memasak</option>
                            {caraMasakOptions.map((method, index) => (
                            <option key={index} value={method}>
                                {method}
                            </option>
                            ))}
                        </select>
                        </div>
                    )}

                        <div className="mb-3">
                        <label className="form-label">Sayur:</label>
                        <select
                        className="form-select"
                        onChange={(e) => handleMenuSelect("sayur", e.target.value)}
                        >
                        <option value="">Pilih Sayur</option>
                        {giziOptions[formData.selectedSakit]?.Sayur.map((option) => (
                            <option key={option.id} value={option.id}>
                            {option.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    {selectedMenu.sayur &&
                        giziOptions[formData.selectedSakit]?.Sayur?.find(
                        (s) => s.id === selectedMenu.sayur
                        )?.subOptions?.length && (
                        <div className="ms-4">
                            <label className="form-label">Sub Menu Sayur:</label>
                            <select
                            className="form-select"
                            onChange={(e) => handleMenuSelect("subSayur", e.target.value)}
                            >
                            <option value="">Pilih Sub Menu Sayur</option>
                            {giziOptions[formData.selectedSakit]?.Sayur?.find(
                                (s) => s.id === selectedMenu.sayur
                            )?.subOptions?.map((subOption) => (
                                <option key={subOption.id} value={subOption.id}>
                                {subOption.name}
                                </option>
                            ))}
                            </select>
                        </div>
                        )}

                    {/* Buah */}
                    <div className="mb-3">
                        <label className="form-label">Buah:</label>
                        <select
                        className="form-select"
                        onChange={(e) => handleMenuSelect("buah", e.target.value)}
                        >
                        <option value="">Pilih Buah</option>
                        {giziOptions[formData.selectedSakit]?.Buah.map((option) => (
                            <option key={option.id} value={option.id}>
                            {option.name}
                            </option>
                        ))}
                        </select>
                    </div>

                    {selectedMenu.buah &&
                        giziOptions[formData.selectedSakit]?.Buah?.find(
                        (b) => b.id === selectedMenu.buah
                        )?.subOptions?.length && (
                        <div className="ms-4">
                            <label className="form-label">Sub Menu Buah:</label>
                            <select
                            className="form-select"
                            onChange={(e) => handleMenuSelect("subBuah", e.target.value)}
                            >
                            <option value="">Pilih Sub Menu Buah</option>
                            {giziOptions[formData.selectedSakit]?.Buah?.find(
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
                    <div className="mb-3">
                        <button
                        onClick={handleSubmit}
                        className="btn btn-success"
                        disabled={!isMenuComplete}
                        >
                        Submit
                        </button>
                    </div>
                    </div>
                )}

                {/* Hasil Input dan Menu */}
                {result && (
        <div className="mt-4">
            {/* Card untuk Hasil Input */}
            <div className="card shadow-lg mb-4" style={{ background: "linear-gradient(135deg, #007bff, #00c6ff)" }}>
            <div className="card-body">
                <h3 className="card-title text-center text-white">Hasil Input</h3>
                <pre className="bg-light text-dark p-3 rounded" style={{ fontSize: "clamp(14px, 2vw, 18px)" }}>
                {result.inputData}
                </pre>
            </div>
            </div>

            {/* Card untuk Hasil Menu */}
            <div className="card shadow-lg mb-4" style={{ background: "linear-gradient(135deg, #007bff, #00c6ff)" }}>
            <div className="card-body">
                <h3 className="card-title text-center text-white">Hasil Menu</h3>
                <pre className="bg-light text-dark p-3 rounded" style={{ fontSize: "clamp(14px, 2vw, 18px)" }}>
                {result.menuData}
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

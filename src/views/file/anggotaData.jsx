const columns = [
    {
      title: 'Nama',
      dataIndex: 'nama',
      width: '30%',
      filters: [
      
    ],
      filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: 'Kelompok',
      dataIndex: 'kelompok',
      filters: [
        
      ],
      width: '20%',
    },
    {
      title: 'Umur',
      dataIndex: 'umur',
      sorter: (a, b) => a.umur - b.umur,
      with: "20%"
    },
    {
      title: "No HP",
      dataIndex: "noHP",
      filters: [
        
      ],
      width: '20%',
    },
    {
      title: "Hobi",
      dataIndex: "hobi",
      filters: [
        
      ],
      width: '20%',
    },
  ];
  
  const data = [
    {
      key: '1',
      kelompok: "al-hikmah",
      nama: 'John Brown',
      umur: 32,
        noHP : "09899822983234",
        hobi : "mengaji"
    },
    {
      key: '2',
      kelompok: "al-hikmah",
      nama: 'Jim Green',
      umur: 42,
    noHP : "08121020121211111" ,
    hobi : "mengaji"
    },
    {
      key: '3',
      kelompok: "al-hikmah",
      nama: 'Joe Black',
      umur: 32,
    noHP: "01238123123109231023" ,
    hobi : "mengaji"
    },
    {
      key: '4',
      kelompok: "al-hikmah",
      nama: 'Jim Red',
      umur: 32,
    noHP: '0912312312309',
    hobi : "mengaji"
    },
  ];

export {columns, data}
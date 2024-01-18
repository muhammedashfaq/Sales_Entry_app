const {Pool} =require('pg')

const pool = new Pool({
    user: process.env.PG_USER_NAME,
    host: process.env.PG_HOST_NAME,
    database:process.env.PG_DATABASE,
    password:process.env.PG_DB_PASSWORD,
    port: 5432, 
  });
  const createItemsTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            item_code VARCHAR(255),
            item_name VARCHAR(255)
        );
    `;

    try {
        await pool.query(createTableQuery);
        console.log('Table "items" created successfully or already exists.');
    } catch (error) {
        console.error('Error creating "items" table:', error);
    }
};


  const addItem = async(req,res)=>{
    try {

        console.log(req.body)
        const{itemCode , itemName} = req.body
        if(! itemCode || !itemName){
            res.status(400).send({message:"Field is empty" , success:false})
        }
        await createItemsTable()
    const result = await pool.query('INSERT INTO items (item_code, item_name) VALUES ($1, $2) RETURNING *', [itemCode, itemName]);
        console.log('added');
        res.status(201).send({message:"added" , success:true , })

        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Somthing went wrong" , success:false})

    }
  }


  const getMasteritems = async(req,res)=>{
    try {
        
            const result = await pool.query("select * from items");
            res.status(200).send({ success: true, data: result.rows });

    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Somthing went wrong" , success:false})
        
    }

  }
  module.exports={
    addItem,
    getMasteritems
  }
const Expense = require("../models/expenseModel");



const addExpenseData = async(req, res)=>{
    try{
        const {amount,description,category}=req.body;

        const expenseData = await Expense.create({
            category,
            amount,
            description
        })

        console.log(expenseData);
        res.status(201).send(`data is created`)
    }catch(err){
        res.status(500).send("Something went wrong.")
    }
}



const getExpenseData = async(req, res)=>{
    try{
  
        
        const expenseData = await Expense.findAll();

        console.log(expenseData);
        res.status(201).send(expenseData);
    }catch(err){
        res.status(500).send("Something went wrong while creating new user.")
    }
}


const deleteExpenseData = async(req, res)=>{
    const {id} = req.params;
    console.log(id);
    try{
        const expenseData = await Expense.findByPk(id);
        if(!expenseData){
            return res.status(404).send({message:"User not found"});
        }

        await expenseData.destroy();

        console.log("Deleted user :",expenseData);
        res.status(200).send(`User data deleted successfullt : ${expenseData}`);
    }catch(err){
        res.status(500).send("Something went wrong while deleting user data.")
    }
}


module.exports={
    addExpenseData,
    getExpenseData,
    deleteExpenseData,
}
const router = require('express').Router() ; 
const Seance = require ('../models/seance') ; 
const _ = require('lodash') ; 

router.post('/' , (req,res)=> { 
    let seance = new Seance ({ 
        ...req.body
    }) ; 
    seance = seance.save() 
    .then(seance => res.status(201).send(seance)) 
    .catch(error => res.status(404).json({error})) ; 

}) ; 

router.get('/' , async (req , res)=> { 
    res.send(await Seance.find())

}) ; 
router.get('/:id', async (req,res)=>{
    Seance.findOne({_id: req.params.id})
    .then(seance=> res.status(200).json(seance))
    .catch(error=> res.status(400).json({error})) ;  
    

});

router.put('/:id', async (req,res)=>{
 
    let seance =await Seance.updateOne({_id:req.params.id} , { ...req.body})
    if(!seance)
        return res.status(404).send('Id is not found')
    seance = await Seance.findById(req.params.id);
    res.send(film) ; 
}) ;

router.delete('/:id', async (req,res)=>{
    let seance =await Seance.findById(req.params.id);
    if(!seance)
        return res.status(404).send('Id is not found')
    await Seance.deleteOne({_id:req.params.id})
    res.send(seance);
});




router.post('/:id/reservation/:nbplaces',async (req,res)=>{
    
    let seance = await Seance.findById(req.params.id);
   if(!seance)
       return res.status(400).send("id is not found");
    let seanceupdated=seance ;
   if(req.params.nbplaces <= seance.nbplaces)
   {
      seanceupdated.nbplaces=seance.nbplaces-req.params.nbplaces
   } else { 
       res.status(404).json({ message : "the reservation are fully booked  "})
   }
   
   seance = _.merge(seance,seanceupdated);
   seance = await seance.save();
   res.send(seance);
}) ; 

module.exports= router  ; 
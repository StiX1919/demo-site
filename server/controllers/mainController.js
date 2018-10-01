
module.exports = {
    getClasses: (req, res) => {
      const dbInstance = req.app.get("db");
  
      dbInstance.getClasses().then(response => {
          return res.status(200).json(response)
      }).catch(console.log)
    },
    getRaces: (req, res) => {
        const dbInstance = req.app.get("db");
    
        dbInstance.getRaces().then(response => {
            return res.status(200).json(response)
        }).catch(console.log)
    },

    createNewHero: (req, res) => {
        
        const {name, heroClass, stats, luck} = req.body
        const dbInstance = req.app.get('db');

        dbInstance.createNewHero([
            name,
            heroClass,
            10,
            req.session.passport.user.user_id
            //change 1 to userId
        ])
        .then(response => {
            console.log(response)
            let HP = (stats[0].value + stats[2].value)*2
            let SP = (stats[1].value + stats[3].value)
            let MP = stats[3].value + luck
            dbInstance.createHeroStats([
                response[0].hero_id,
                stats[0].value, 
                stats[1].value, 
                stats[2].value, 
                stats[3].value,
                HP,
                SP,
                MP,
                luck,
                1,
                0,
                0
            ]).then(statResponse => {
                console.log(statResponse);
                res.sendStatus(200)
            }).catch(statErr => {
                console.log('stats error', statErr)
            })
        }).catch(heroErr => {
            console.log('hero Error', heroErr)
        })

        // dbInstance.createNewHero([req.body.name, 
        //                             req.body.class, 
        //                             stats['Strength'].value, 
        //                             stats['Speed'].value, 
        //                             stats['Endurance'].value, 
        //                             stats['Intelligence'].value,
        //                             req.body.userId])
        // .then(response => {
        //     res.status(200).json(response)
        // }).catch(console.log)

    },

    getHeroes: (req, res) => {
        // const dbInstance = ;

        req.app.get('db').getHeroes([req.user.user_id]).then(response => {
            console.log('hero response', response[0])
            res.status(200).json(response)
        }).catch(console.log)
    }
  };
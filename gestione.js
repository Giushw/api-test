var generatoreCasuale={
	nomiUomo: ['Carlo','Simone','Federico','Alessio','Enrico','Luca','Giovanni','Giuseppe','Ernesto','Mario','Fabio','Angelo'],
	cognomi: ['Rossi','Verdi','Gialli','Arancioni','Azzurri','Marroni','Neri','Bianchi','Celesti'],

	elementoCasuale: function(elenco)
	{
		return elenco[Math.floor(Math.random()*10000%elenco.length)];
	},

	nomeCasuale: function()
	{
		return this.elementoCasuale(this.nomiUomo);
	},

	cognomeCasuale: function()
	{
		return this.elementoCasuale(this.cognomi);
	},

	etaCasuale: function()
	{
		return Math.floor(6+Math.random()*60);
	}


};

var gestionePersone={

		elenco:[],

		tutti: function()
		{
			return this.elenco;
		},

		nuovo: function()
		{
			nuovoTizio={nome: generatoreCasuale.nomeCasuale(), cognome: generatoreCasuale.cognomeCasuale(), eta: generatoreCasuale.etaCasuale()};
			this.elenco.push(nuovoTizio);
		},

		creaCasuali: function(n)
		{
			for (i=0; i<n; i++)
				this.nuovo();
		}

};

exports.gestionePersone=gestionePersone;

const explicationsData = [
    {
        mot: "Canette",
        recyclage: "Les canettes en aluminium sont recyclables. Après avoir été collectées, elles sont fondues pour être réutilisées dans la fabrication de nouvelles canettes ou d'autres produits en aluminium."
    },
    {
        mot: "Ferraille",
        recyclage: "La ferraille, telle que les vieux appareils ménagers, les casseroles, les ustensiles de cuisine en métal, etc., peut être recyclée. Elle est fondue pour être transformée en nouveaux produits métalliques."
    },
    {
        mot: "Bouteille d'eau",
        recyclage:"Les bouteilles d'eau en plastique sont collectées, triées, lavées, déchiquetées, fondues et transformées en granulés recyclés. Ces granulés sont ensuite utilisés pour fabriquer de nouveaux produits en plastique."
    },
    {
        mot: "Barre d'acier",
        recyclage: "Les barres d'acier sont recyclables. Après collecte, elles sont fondues et transformées en nouveaux produits en acier, tels que des poutres ou des tiges."
    },
    {
        mot: "Boîte de conserve",
        recyclage: "Les boîtes de conserve sont recyclables. Après collecte, elles sont nettoyées, fondues et transformées en feuilles de métal pour être utilisées dans la fabrication de nouveaux emballages."
    },
    {
        mot: "Évier en acier inoxydable",
        recyclage: "Les éviers en acier inoxydable sont recyclables. Après démantèlement, l'acier est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier."
    },
    {
        mot: "Tuyau en cuivre",
        recyclage: "Les tuyaux en cuivre sont recyclables. Après collecte, ils sont fondus et purifiés pour être réutilisés dans la fabrication de nouveaux produits en cuivre."
    },
    {
        mot: "Radiateur en fonte",
        recyclage: "Les radiateurs en fonte sont recyclables. Après collecte, la fonte est fondue et moulée pour être réutilisée dans la fabrication de nouveaux produits en fonte."
    },
    {
        mot: "Câble électrique en cuivre",
        recyclage: "Les câbles électriques en cuivre sont recyclables. Après collecte, ils sont pelés pour séparer le cuivre du plastique, puis le cuivre est fondu pour être réutilisé."
    },
    {
        mot: "Canette en acier",
        recyclage: "Les canettes en acier sont recyclables. Après collecte, elles sont nettoyées, fondues et transformées en acier utilisé pour fabriquer de nouveaux emballages."
    },
    {
        mot: "Boulon en acier",
        recyclage: "Les boulons en acier sont recyclables. Après collecte, ils sont fondus et transformés en nouveaux produits en acier, tels que des pièces mécaniques ou des outils."
    },
    {
        mot: "Fil de fer",
        recyclage: "Les fils de fer sont recyclables. Après collecte, ils sont fondus pour être utilisés dans la fabrication de nouveaux produits en acier ou en fer."
    },
    {
        mot: "Lame de rasoir en acier",
        recyclage: "Les lames de rasoir en acier sont recyclables. Après collecte, elles sont fondues et transformées en acier pour être utilisées dans la fabrication de nouveaux produits métalliques."
    },
    {
        mot: "Clé à molette",
        recyclage: "Les clés à molette en acier sont recyclables. Après collecte, elles sont fondues et transformées en acier pour être réutilisées dans la fabrication d'outils ou d'autres produits."
    },
    {
        mot: "Fer à repasser",
        recyclage: "Les fers à repasser en métal sont recyclables. Après collecte, le métal est fondu pour être réutilisé dans la fabrication de nouveaux produits en métal."
    },
    {
        mot: "Pelle en métal",
        recyclage: "Les pelles en métal sont recyclables. Après collecte, elles sont fondues et transformées en nouveaux produits en métal, tels que des outils de jardinage ou des pièces automobiles."
    },
    {
        mot: "Cadenas en laiton",
        recyclage: "Les cadenas en laiton sont recyclables. Après collecte, le laiton est fondu et purifié pour être réutilisé dans la fabrication de nouveaux produits en laiton, tels que des serrures ou des bijoux."
    },
    {
        mot: "Batterie de voiture",
        recyclage: "Les batteries de voiture contiennent plusieurs matériaux recyclables, notamment le plomb, le plastique et l'acide. Elles doivent être recyclées dans des installations spécialisées pour récupérer ces matériaux de manière sûre et efficace."
    },
    {
        mot: "Couteau en acier",
        recyclage: "Les couteaux en acier sont recyclables. Après collecte, ils sont fondus pour être réutilisés dans la fabrication de nouveaux produits en acier, tels que des ustensiles de cuisine ou des outils."
    },
    {
        mot: "Vis en métal",
        recyclage: "Les vis en métal sont recyclables. Après collecte, elles sont fondues et transformées en nouveaux produits en métal, tels que des pièces de construction ou des appareils électroniques."
    },
    {
        mot: "Échafaudage en aluminium",
        recyclage: "Les échafaudages en aluminium sont recyclables. Après démantèlement, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de fenêtres ou des pièces automobiles."
    },
    {
        mot: "Grenaille en plomb",
        recyclage: "La grenaille en plomb est recyclable. Après collecte, le plomb est fondu et purifié pour être réutilisé dans la fabrication de nouveaux produits en plomb, tels que des batteries ou des câbles."
    },
    {
        mot: "Pied de biche en acier",
        recyclage: "Les pieds de biche en acier sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en acier, tels que des outils de construction ou des équipements industriels."
    },
    {
        mot: "Échelle en aluminium",
        recyclage: "Les échelles en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de vélo ou des éléments de construction."
    },
    {
        mot: "Gouttière en zinc",
        recyclage: "Les gouttières en zinc sont recyclables. Après collecte, le zinc est fondu et purifié pour être réutilisé dans la fabrication de nouveaux produits en zinc, tels que des tuyaux ou des revêtements de toiture."
    },
    {
        mot: "Réfrigérateur en métal",
        recyclage: "Les réfrigérateurs en métal sont recyclables. Après démantèlement, les métaux sont récupérés et fondus pour être réutilisés dans la fabrication de nouveaux produits métalliques."
    },
    {
        mot: "Serrure en métal",
        recyclage: "Les serrures en métal sont recyclables. Après collecte, elles sont fondues et transformées en nouveaux produits en métal, tels que des pièces de quincaillerie ou des éléments de sécurité."
    },
    {
        mot: "Fusible en plomb",
        recyclage: "Les fusibles en plomb sont recyclables. Après collecte, le plomb est fondu pour être réutilisé dans la fabrication de nouveaux produits en plomb, tels que des batteries ou des câbles."
    },
    {
        mot: "Maillet en métal",
        recyclage: "Les maillets en métal sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des outils de menuiserie ou des pièces automobiles."
    },
    {
        mot: "Pot d'échappement en acier inoxydable",
        recyclage: "Les pots d'échappement en acier inoxydable sont recyclables. Après démontage, l'acier inoxydable est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier."
    },
    {
        mot: "Douille en laiton",
        recyclage: "Les douilles en laiton sont recyclables. Après collecte, le laiton est fondu et purifié pour être réutilisé dans la fabrication de nouveaux produits en laiton, tels que des composants électroniques ou des instruments de musique."
    },
    {
        mot: "Écrou en acier",
        recyclage: "Les écrous en acier sont recyclables. Après collecte, ils sont fondus et transformés en nouveaux produits en acier, tels que des pièces de construction ou des machines."
    },
    {
        mot: "Hache en métal",
        recyclage: "Les haches en métal sont recyclables. Après collecte, elles sont fondues pour être transformées en nouveaux produits en métal, tels que des outils de jardinage ou des armes."
    },
    {
        mot: "Bombe de peinture en aluminium",
        recyclage: "Les bombes de peinture en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de vélo ou des éléments de construction."
    },
    {
        mot: "Râpe en acier inoxydable",
        recyclage: "Les râpes en acier inoxydable sont recyclables. Après collecte, l'acier inoxydable est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier."
    },
    {
        mot: "Douille en acier",
        recyclage: "Les douilles en acier sont recyclables. Après collecte, elles sont fondues et transformées en nouveaux produits en acier, tels que des pièces automobiles ou des équipements industriels."
    },
    {
        mot: "Outil de jardinage en métal",
        recyclage: "Les outils de jardinage en métal sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des outils de construction ou des pièces automobiles."
    },
    {
        mot: "Plaque d'égout en fonte",
        recyclage: "Les plaques d'égout en fonte sont recyclables. Après collecte, la fonte est fondue et moulée pour être réutilisée dans la fabrication de nouveaux produits en fonte, tels que des grilles de drainage ou des pièces de voirie."
    },
    {
        mot: "Tambour de machine à laver en acier",
        recyclage: "Les tambours de machine à laver en acier sont recyclables. Après collecte, l'acier est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier, tels que des pièces automobiles ou des appareils électroménagers."
    },
    {
        mot: "Fusil en acier",
        recyclage: "Les fusils en acier sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en acier, tels que des pièces automobiles ou des armes."
    },
    {
        mot: "Gond en métal",
        recyclage: "Les gonds en métal sont recyclables. Après collecte, ils sont fondus et transformés en nouveaux produits en métal, tels que des pièces de quincaillerie ou des éléments de construction."
    },
    {
        mot: "Martinet en fer",
        recyclage: "Les martinets en fer sont recyclables. Après collecte, le fer est fondu pour être transformé en nouveaux produits en fer, tels que des outils ou des éléments de construction."
    },
    {
        mot: "Niveau à bulle en aluminium",
        recyclage: "Les niveaux à bulle en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de vélo ou des outils de construction."
    },
    {
        mot: "Roue de vélo en aluminium",
        recyclage: "Les roues de vélo en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de vélo ou des pièces automobiles."
    },
    {
        mot: "Tiroir en métal",
        recyclage: "Les tiroirs en métal sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des pièces de mobilier ou des éléments de construction."
    },
    {
        mot: "Boucle de ceinture en acier",
        recyclage: "Les boucles de ceinture en acier sont recyclables. Après collecte, elles sont fondues et transformées en nouveaux produits en acier, tels que des accessoires vestimentaires ou des pièces automobiles."
    },
    {
        mot: "Caisse à outils en métal",
        recyclage: "Les caisses à outils en métal sont recyclables. Après collecte, elles sont fondues pour être transformées en nouveaux produits en métal, tels que des pièces de mobilier ou des équipements industriels."
    },
    {
        mot: "Grille de barbecue en acier inoxydable",
        recyclage: "Les grilles de barbecue en acier inoxydable sont recyclables. Après collecte, l'acier inoxydable est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier."
    },
    {
        mot: "Pied de table en acier",
        recyclage: "Les pieds de table en acier sont recyclables. Après collecte, ils sont fondus et transformés en nouveaux produits en acier, tels que des pièces de mobilier ou des équipements industriels."
    },
    {
        mot: "Casserole en cuivre",
        recyclage: "Les casseroles en cuivre sont recyclables. Après collecte, le cuivre est fondu et purifié pour être réutilisé dans la fabrication de nouveaux produits en cuivre, tels que des ustensiles de cuisine ou des éléments de décoration."
    },
    {
        mot: "Rampe d'escalier en aluminium",
        recyclage: "Les rampes d'escalier en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de vélo ou des pièces automobiles."
    },
    {
        mot: "Barbecue en métal",
        recyclage: "Les barbecues en métal sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des pièces de construction ou des équipements de jardinage."
    },
    {
        mot: "Plaque d'immatriculation en aluminium",
        recyclage: "Les plaques d'immatriculation en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de vélo ou des pièces automobiles."
    },
    {
        mot: "Clé en métal",
        recyclage: "Les clés en métal sont recyclables. Après collecte, elles sont fondues pour être transformées en nouveaux produits en métal, tels que des pièces de quincaillerie ou des éléments de sécurité."
    },
    {
        mot: "Treillis métallique",
        recyclage: "Les treillis métalliques sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des pièces de construction ou des éléments de clôture."
    },
    {
        mot: "Marteau en acier",
        recyclage: "Les marteaux en acier sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en acier, tels que des outils de construction ou des pièces automobiles."
    },
    {
        mot: "Grille de four en acier inoxydable",
        recyclage: "Les grilles de four en acier inoxydable sont recyclables. Après collecte, l'acier inoxydable est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier."
    },
    {
        mot: "Étagère métallique",
        recyclage: "Les étagères métalliques sont recyclables. Après collecte, elles sont fondues pour être transformées en nouveaux produits en métal, tels que des pièces de mobilier ou des éléments de rangement."
    },
    {
        mot: "Étau en acier",
        recyclage: "Les étaux en acier sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en acier, tels que des outils de construction ou des pièces mécaniques."
    },
    {
        mot: "Casseroles en aluminium",
        recyclage: "Les casseroles en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des ustensiles de cuisine ou des éléments de décoration."
    },
    {
        mot: "Porte de garage en acier",
        recyclage: "Les portes de garage en acier sont recyclables. Après collecte, l'acier est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier, tels que des pièces automobiles ou des éléments de construction."
    },
    {
        mot: "Cadre de lit en métal",
        recyclage: "Les cadres de lit en métal sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des pièces de mobilier ou des éléments de construction."
    },
    {
        mot: "Tapis de souris en métal",
        recyclage: "Les tapis de souris en métal sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des accessoires informatiques ou des éléments de décoration."
    },
    {
        mot: "Bouteille de gaz en acier",
        recyclage: "Les bouteilles de gaz en acier sont recyclables. Après collecte, l'acier est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier, tels que des réservoirs ou des cylindres."
    },
    {
        mot: "Crochet en métal",
        recyclage: "Les crochets en métal sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en métal, tels que des pièces de quincaillerie ou des éléments de suspension."
    },
    {
        mot: "Cadre de fenêtre en aluminium",
        recyclage: "Les cadres de fenêtre en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des cadres de vélo ou des éléments de construction."
    },
    {
        mot: "Rallonge électrique en métal",
        recyclage: "Les rallonges électriques en métal sont recyclables. Après collecte, elles sont fondues pour être transformées en nouveaux produits en métal, tels que des pièces de construction ou des appareils électriques."
    },
    {
        mot: "Pince à linge en acier inoxydable",
        recyclage: "Les pinces à linge en acier inoxydable sont recyclables. Après collecte, l'acier inoxydable est récupéré et fondu pour être réutilisé dans la fabrication de nouveaux produits en acier."
    },
    {
        mot: "Porte en métal",
        recyclage: "Les portes en métal sont recyclables. Après collecte, elles sont fondus pour être transformées en nouveaux produits en métal, tels que des pièces de construction ou des éléments de mobilier."
    },
    {
        mot: "Ressort en acier",
        recyclage: "Les ressorts en acier sont recyclables. Après collecte, ils sont fondus pour être transformés en nouveaux produits en acier, tels que des pièces mécaniques ou des outils."
    },
    {
        mot: "Tôle en aluminium",
        recyclage: "Les tôles en aluminium sont recyclables. Après collecte, l'aluminium est fondu pour être réutilisé dans la fabrication de nouveaux produits en aluminium, tels que des panneaux de signalisation ou des emballages."
    },
    {
        mot: "Boule d'attelage en acier",
        recyclage: "Les boules d'attelage en acier sont recyclables. Après collecte, elles sont fondus pour être transformées en nouveaux produits en acier, tels que des pièces automobiles ou des équipements industriels."
    },
    {
        mot: "Bouteille en plastique",
        recyclage: "Les bouteilles en plastique sont recyclables. Après collecte, elles sont triées, nettoyées et fondues pour être transformées en nouveaux produits en plastique, tels que des bouteilles, des conteneurs ou des fibres."
    },
    {
        mot: "Emballage en plastique",
        recyclage: "Les emballages en plastique, tels que les sacs, les films et les contenants, sont recyclables dans de nombreux programmes de recyclage. Ils sont généralement recyclés en nouveaux emballages en plastique ou en autres produits en plastique."
    },
    {
        mot: "Sachet plastique",
        recyclage: "Les sachets plastiques peuvent être recyclés dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bidon en plastique",
        recyclage: "Les bidons en plastique, tels que les bidons de détergent ou d'huile, sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouchon en plastique",
        recyclage: "Les bouchons en plastique peuvent être recyclés dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Film plastique",
        recyclage: "Les films plastiques, tels que les films d'emballage ou les sacs, peuvent être recyclés dans certains programmes de recyclage. Ils sont généralement transformés en nouveaux films plastiques ou en matériaux de construction."
    },
    {
        mot: "Gobelet en plastique",
        recyclage: "Les gobelets en plastique, tels que les gobelets à café, peuvent être recyclés dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique."
    },
    {
        mot: "Paille en plastique",
        recyclage: "Les pailles en plastique peuvent être recyclées dans certains programmes de recyclage. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Plateau en plastique",
        recyclage: "Les plateaux en plastique, tels que les plateaux alimentaires, sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bac en plastique",
        recyclage: "Les bacs en plastique, tels que les bacs de rangement, sont recyclables dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique."
    },
    {
        mot: "Sachet de congélation en plastique",
        recyclage: "Les sachets de congélation en plastique peuvent être recyclés dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Flacon de shampooing en plastique",
        recyclage: "Les flacons de shampooing en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Barquette en plastique",
        recyclage: "Les barquettes en plastique, telles que les barquettes alimentaires, sont recyclables dans certains programmes de recyclage. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Pot de crème en plastique",
        recyclage: "Les pots de crème en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Tube de dentifrice en plastique",
        recyclage: "Les tubes de dentifrice en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Tube de crème solaire en plastique",
        recyclage: "Les tubes de crème solaire en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouteille de détergent en plastique",
        recyclage: "Les bouteilles de détergent en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Contenant en plastique",
        recyclage: "Les contenants en plastique, tels que les pots et les boîtes, sont recyclables dans de nombreux programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Sac en plastique",
        recyclage: "Les sacs en plastique, tels que les sacs d'épicerie et les sacs poubelle, peuvent être recyclés dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouchon de bouteille en plastique",
        recyclage: "Les bouchons de bouteille en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouteille de lait en plastique",
        recyclage: "Les bouteilles de lait en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouchon de pot en plastique",
        recyclage: "Les bouchons de pot en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Barquette de fruits en plastique",
        recyclage: "Les barquettes de fruits en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Boîte en plastique",
        recyclage: "Les boîtes en plastique, telles que les boîtes alimentaires, sont recyclables dans certains programmes de recyclage. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Flacon de produit de nettoyage en plastique",
        recyclage: "Les flacons de produits de nettoyage en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Pot de confiture en plastique",
        recyclage: "Les pots de confiture en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouteille de soda en plastique",
        recyclage: "Les bouteilles de soda en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Pot de peinture en plastique",
        recyclage: "Les pots de peinture en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Boîte à œufs en plastique",
        recyclage: "Les boîtes à œufs en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bidon de lessive en plastique",
        recyclage: "Les bidons de lessive en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouteille de jus en plastique",
        recyclage: "Les bouteilles de jus en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Barquette de légumes en plastique",
        recyclage: "Les barquettes de légumes en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouteille de produit de nettoyage en plastique",
        recyclage: "Les bouteilles de produits de nettoyage en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Gourde en plastique",
        recyclage: "Les gourdes en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Sachet de thé en plastique",
        recyclage: "Les sachets de thé en plastique peuvent être recyclés dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Pot de peinture en plastique",
        recyclage: "Les pots de peinture en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Sachet de café en plastique",
        recyclage: "Les sachets de café en plastique peuvent être recyclés dans certains programmes de recyclage. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Pochette en plastique",
        recyclage: "Les pochettes en plastique, telles que les pochettes de documents ou les pochettes alimentaires, peuvent être recyclées dans certains programmes de recyclage. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Pot de confiture en plastique",
        recyclage: "Les pots de confiture en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Bouteille de sauce en plastique",
        recyclage: "Les bouteilles de sauce en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Barquette de viande en plastique",
        recyclage: "Les barquettes de viande en plastique sont recyclables. Après collecte, elles sont nettoyées, triées et recyclées en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Tube de colle en plastique",
        recyclage: "Les tubes de colle en plastique sont recyclables. Après collecte, ils sont nettoyés, triés et recyclés en nouveaux produits en plastique ou en matériaux de construction."
    },
    {
        mot: "Journal",
        recyclage: "Les journaux sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des magazines et du papier d'emballage."
    },
    {
        mot: "Magazine",
        recyclage: "Les magazines sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que du papier journal et du papier d'emballage."
    },
    {
        mot: "Carton",
        recyclage: "Le carton est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que du papier d'emballage et des boîtes."
    },
    {
        mot: "Cahier",
        recyclage: "Les cahiers sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que du papier journal et du papier d'emballage."
    },
    {
        mot: "Feuille de papier",
        recyclage: "Les feuilles de papier sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que du papier d'emballage et des cartons."
    },
    {
        mot: "Boîte en carton",
        recyclage: "Les boîtes en carton sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que du papier d'emballage et des cahiers."
    },
    {
        mot: "Enveloppe",
        recyclage: "Les enveloppes sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que du papier d'emballage et des cahiers."
    },
    {
        mot: "Livre",
        recyclage: "Les livres sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et du papier d'emballage."
    },
    {
        mot: "Caisse en carton",
        recyclage: "Les caisses en carton sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cartons et des cahiers."
    },
    {
        mot: "Papier d'emballage",
        recyclage: "Le papier d'emballage est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Serviette en papier",
        recyclage: "Les serviettes en papier sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des mouchoirs et des essuie-tout."
    },
    {
        mot: "Mouchoir en papier",
        recyclage: "Les mouchoirs en papier sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des serviettes en papier et des essuie-tout."
    },
    {
        mot: "Essuie-tout",
        recyclage: "Les essuie-tout sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des serviettes en papier et des mouchoirs."
    },
    {
        mot: "Papier kraft",
        recyclage: "Le papier kraft est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des emballages et des sacs en papier."
    },
    {
        mot: "Sac en papier",
        recyclage: "Les sacs en papier sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des emballages et des cartons."
    },
    {
        mot: "Papier crépon",
        recyclage: "Le papier crépon est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des décorations et des emballages."
    },
    {
        mot: "Papier journal",
        recyclage: "Le papier journal est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des magazines et des cartons."
    },
    {
        mot: "Feuille de dessin",
        recyclage: "Les feuilles de dessin sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Papier peint",
        recyclage: "Le papier peint est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cartons et des cahiers."
    },
    {
        mot: "Carnet",
        recyclage: "Les carnets sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Bloc-notes",
        recyclage: "Les blocs-notes sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Papier hygiénique",
        recyclage: "Le papier hygiénique est recyclable dans certains programmes de recyclage. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des serviettes en papier et des mouchoirs."
    },
    {
        mot: "Livre de coloriage",
        recyclage: "Les livres de coloriage sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Papier sulfurisé",
        recyclage: "Le papier sulfurisé est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des emballages et des cartons."
    },
    {
        mot: "Papier de bureau",
        recyclage: "Le papier de bureau est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Papier photo",
        recyclage: "Le papier photo est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Papier recyclé",
        recyclage: "Le papier recyclé est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Caissette de cupcakes",
        recyclage: "Les caissettes de cupcakes sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Étiquette en papier",
        recyclage: "Les étiquettes en papier sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Boîte à pizza en carton",
        recyclage: "Les boîtes à pizza en carton sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cartons et des cahiers."
    },
    {
        mot: "Ticket de caisse",
        recyclage: "Les tickets de caisse sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Papier cadeau",
        recyclage: "Le papier cadeau est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des emballages et des cartons."
    },
    {
        mot: "Ticket de transport",
        recyclage: "Les tickets de transport sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Feuille de brouillon",
        recyclage: "Les feuilles de brouillon sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Boîte à chaussures en carton",
        recyclage: "Les boîtes à chaussures en carton sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cartons et des cahiers."
    },
    {
        mot: "Papier absorbant",
        recyclage: "Le papier absorbant est recyclable dans certains programmes de recyclage. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des serviettes en papier et des mouchoirs."
    },
    {
        mot: "Papier calque",
        recyclage: "Le papier calque est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Litière pour animaux en papier",
        recyclage: "La litière pour animaux en papier est recyclable. Après collecte, elle est nettoyée et transformée en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des serviettes en papier et des mouchoirs."
    },
    {
        mot: "Coffret cadeau en carton",
        recyclage: "Les coffrets cadeaux en carton sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cartons et des cahiers."
    },
    {
        mot: "Papier de soie",
        recyclage: "Le papier de soie est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Papier pour imprimante",
        recyclage: "Le papier pour imprimante est recyclable. Après collecte, il est nettoyé et transformé en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Sous-main",
        recyclage: "Les sous-mains sont recyclables. Après collecte, ils sont nettoyés et transformés en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Étiquette adhésive en papier",
        recyclage: "Les étiquettes adhésives en papier sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Feuille de soie",
        recyclage: "Les feuilles de soie sont recyclables. Après collecte, elles sont nettoyées et transformées en nouvelle pâte à papier pour fabriquer d'autres produits en papier, tels que des cahiers et des cartons."
    },
    {
        mot: "Bouteille en verre",
        recyclage: "Les bouteilles en verre sont recyclables. Après collecte, elles sont nettoyées, triées par couleur, fondues et moulées pour fabriquer de nouvelles bouteilles ou d'autres produits en verre, tels que des pots ou des récipients."
    },
    {
        mot: "Bocal en verre",
        recyclage: "Les bocaux en verre sont recyclables. Après collecte, ils sont nettoyés, triés par couleur, fondus et moulés pour fabriquer de nouveaux bocaux ou d'autres produits en verre, tels que des verrines ou des contenants alimentaires."
    },
    {
        mot: "Verre",
        recyclage: "Le verre est recyclable. Après collecte, il est nettoyé, trié par couleur, fondu et moulé pour fabriquer de nouvelles bouteilles, bocaux ou d'autres produits en verre, tels que des vitres ou des isolants."
    },
    {
        mot: "Pots en verre",
        recyclage: "Les pots en verre sont recyclables. Après collecte, ils sont nettoyés, triés par couleur, fondus et moulés pour fabriquer de nouveaux pots ou d'autres produits en verre, tels que des photophores ou des décorations."
    },
    {
        mot: "Vaisselle en verre",
        recyclage: "La vaisselle en verre est recyclable. Après collecte, elle est nettoyée, triée par couleur, fondue et moulée pour fabriquer de nouveaux articles de vaisselle ou d'autres produits en verre, tels que des verres ou des assiettes."
    },
    {
        mot: "Flacon en verre",
        recyclage: "Les flacons en verre sont recyclables. Après collecte, ils sont nettoyés, triés par couleur, fondus et moulés pour fabriquer de nouveaux flacons ou d'autres produits en verre, tels que des parfums ou des produits cosmétiques."
    },
    {
        mot: "Récipient en verre",
        recyclage: "Les récipients en verre sont recyclables. Après collecte, ils sont nettoyés, triés par couleur, fondus et moulés pour fabriquer de nouveaux récipients ou d'autres produits en verre, tels que des bocaux ou des pots."
    },
    {
        mot: "Contenant en verre",
        recyclage: "Les contenants en verre sont recyclables. Après collecte, ils sont nettoyés, triés par couleur, fondus et moulés pour fabriquer de nouveaux contenants ou d'autres produits en verre, tels que des bouteilles ou des bocaux."
    },
    {
        mot: "Verre trempé",
        recyclage: "Le verre trempé est recyclable dans certains programmes de recyclage. Après collecte, il est nettoyé, trié par couleur, fondu et moulé pour fabriquer de nouveaux produits en verre, tels que des vitres ou des isolants."
    },
    {
        mot: "Vitrophanie",
        recyclage: "La vitrophanie est recyclable dans certains programmes de recyclage. Après collecte, elle est nettoyée, triée par couleur, fondue et moulée pour fabriquer de nouveaux produits en verre, tels que des vitrines ou des objets décoratifs."
    },
    {
        mot: "Verre recyclé",
        recyclage: "Le verre recyclé est utilisé dans la fabrication de nouveaux produits en verre, réduisant ainsi la consommation de matières premières et d'énergie nécessaires à la production de verre neuf."
    },
    {
        mot: "Recyclage du verre",
        recyclage: "Le recyclage du verre permet de réduire la quantité de déchets envoyés en décharge et de préserver les ressources naturelles en réutilisant le verre comme matière première pour de nouveaux produits."
    },
    {
        mot: "Déchets de verre",
        recyclage: "Les déchets de verre, tels que les bouteilles et les bocaux, doivent être correctement triés et recyclés pour minimiser leur impact sur l'environnement et favoriser leur réutilisation dans de nouveaux produits en verre."
    },
    {
        mot: "Tri sélectif",
        recyclage: "Le tri sélectif des déchets de verre est essentiel pour garantir leur recyclage efficace. Les consommateurs doivent séparer les bouteilles, bocaux et autres contenants en verre des autres déchets afin de faciliter le processus de recyclage."
    },
    {
        mot: "Collecte sélective",
        recyclage: "La collecte sélective des déchets de verre permet de rassembler les bouteilles, bocaux et autres contenants en verre dans des conteneurs dédiés, facilitant ainsi leur recyclage ultérieur dans les installations spécialisées."
    },
    {
        mot: "Fusion du verre",
        recyclage: "La fusion du verre est une étape essentielle du processus de recyclage. Le verre collecté est fondu à haute température pour être transformé en matière première utilisable dans la fabrication de nouveaux produits en verre."
    },
    {
        mot: "Revalorisation du verre",
        recyclage: "La revalorisation du verre consiste à transformer les déchets de verre en nouveaux produits ou matériaux, réduisant ainsi la nécessité de puiser dans les ressources naturelles pour fabriquer du verre neuf et minimisant l'impact environnemental."
    },
    {
        mot: "Recyclage vertueux",
        recyclage: "Le recyclage vertueux du verre implique la collecte, le tri et le traitement efficaces des déchets de verre pour créer un cycle de vie durable, où le verre est continuellement recyclé et réutilisé sans compromettre la qualité ou les performances."
    },
    {
        mot: "Réutilisation du verre",
        recyclage: "La réutilisation du verre, sous forme de bouteilles consignées par exemple, permet de prolonger la durée de vie utile du matériau, réduisant ainsi la quantité de déchets envoyés en décharge et préservant les ressources naturelles."
    },
    {
        mot: "Économie circulaire",
        recyclage: "L'économie circulaire du verre vise à minimiser le gaspillage en réutilisant les déchets de verre comme matière première pour fabriquer de nouveaux produits, créant ainsi un système durable où les ressources sont utilisées de manière efficace et responsable."
    },
    {
        mot: "Durabilité environnementale",
        recyclage: "Le recyclage du verre contribue à la durabilité environnementale en réduisant la quantité de déchets envoyés en décharge, en préservant les ressources naturelles et en minimisant l'empreinte carbone associée à la production de verre neuf."
    },
    {
        mot: "Éco-responsabilité",
        recyclage: "L'éco-responsabilité implique de prendre des mesures pour réduire son impact sur l'environnement, y compris le recyclage et la réutilisation des déchets de verre pour minimiser la pollution et favoriser la durabilité des ressources."
    },
    {
        mot: "Cycle de vie du verre",
        recyclage: "Le cycle de vie du verre comprend les étapes de production, d'utilisation, de collecte, de recyclage et de réutilisation, visant à créer un système durable où le verre est continuellement recyclé et réintroduit dans l'économie."
    },
    {
        mot: "Gestion des déchets",
        recyclage: "La gestion efficace des déchets de verre implique le tri, la collecte, le traitement et le recyclage appropriés des bouteilles, bocaux et autres contenants en verre pour minimiser leur impact environnemental et favoriser leur réutilisation."
    },
    {
        mot: "Innovation environnementale",
        recyclage: "L'innovation environnementale dans le domaine du recyclage du verre vise à développer de nouvelles technologies et pratiques pour améliorer l'efficacité, la durabilité et l'impact environnemental du processus de recyclage et de réutilisation du verre."
    },
    {
        mot: "Économie verte",
        recyclage: "L'économie verte du verre repose sur le recyclage efficace des déchets de verre pour créer de nouveaux produits et matériaux, favorisant ainsi la croissance économique tout en préservant les ressources naturelles et en réduisant les émissions de carbone."
    },
    {
        mot: "Émissions de CO2",
        recyclage: "Le recyclage du verre contribue à réduire les émissions de dioxyde de carbone (CO2) en minimisant la nécessité de produire du verre neuf à partir de matières premières vierges, ce qui nécessite plus d'énergie et génère plus de pollution."
    },
    {
        mot: "Matériaux recyclables",
        recyclage: "Le verre est l'un des matériaux les plus recyclables, pouvant être fondu et réutilisé à l'infini sans perdre ses propriétés. Le recyclage du verre permet de préserver les ressources naturelles et de réduire la quantité de déchets envoyés en décharge."
    },
    {
        mot: "Impact environnemental",
        recyclage: "Le recyclage du verre a un impact environnemental positif en réduisant la quantité de déchets envoyés en décharge, en préservant les ressources naturelles et en minimisant l'empreinte carbone associée à la production de verre neuf."
    },
    {
        mot: "Développement durable",
        recyclage: "Le recyclage du verre est une pratique clé du développement durable, contribuant à la préservation de l'environnement, à la réduction des émissions de carbone et à la création d'une économie circulaire où les ressources sont utilisées de manière responsable."
    },
    {
        mot: "Énergie renouvelable",
        recyclage: "Le recyclage du verre nécessite moins d'énergie que la production de verre neuf à partir de matières premières vierges, ce qui en fait une option plus durable et respectueuse de l'environnement, alignée sur les objectifs d'utilisation d'énergie renouvelable."
    },
    {
        mot: "Récupération des matériaux",
        recyclage: "La récupération des matériaux, tels que le verre, à partir des déchets permet de minimiser la quantité de déchets envoyés en décharge et de préserver les ressources naturelles en réutilisant les matériaux existants pour fabriquer de nouveaux produits."
    },
    {
        mot: "Vêtements usagés",
        recyclage: "Les vêtements usagés peuvent être recyclés en les donnant à des organismes de bienfaisance, en les vendant dans des magasins d'occasion ou en les transformant en nouveaux articles textiles."
    },
    {
        mot: "Recyclage textile",
        recyclage: "Le recyclage textile implique la collecte, le tri et le traitement des vêtements usagés pour les transformer en nouvelles fibres textiles ou en produits recyclés, réduisant ainsi la quantité de déchets textiles envoyés en décharge."
    },
    {
        mot: "Fibres textiles",
        recyclage: "Les fibres textiles, telles que le coton, le polyester et le nylon, peuvent être recyclées à partir de vêtements usagés pour créer de nouveaux tissus et produits textiles, contribuant ainsi à réduire la demande de matières premières vierges."
    },
    {
        mot: "Don de vêtements",
        recyclage: "Le don de vêtements usagés à des organismes de bienfaisance ou à des initiatives locales permet de prolonger leur durée de vie utile et de les redistribuer à ceux qui en ont besoin, réduisant ainsi la quantité de déchets textiles."
    },
    {
        mot: "Commerce équitable",
        recyclage: "Le commerce équitable dans l'industrie textile vise à garantir des conditions de travail équitables et des pratiques respectueuses de l'environnement tout au long de la chaîne d'approvisionnement, encourageant ainsi la durabilité et le recyclage des textiles."
    },
    {
        mot: "Upcycling",
        recyclage: "L'upcycling des textiles consiste à transformer des vêtements usagés en nouveaux articles de qualité supérieure, prolongeant ainsi leur durée de vie utile et réduisant la quantité de déchets textiles envoyés en décharge."
    },
    {
        mot: "Industrie du recyclage textile",
        recyclage: "L'industrie du recyclage textile regroupe les entreprises et les initiatives qui collectent, trient et recyclent les vêtements usagés pour les transformer en nouveaux produits textiles ou en matières premières recyclées."
    },
    {
        mot: "Réduction des déchets",
        recyclage: "La réduction des déchets textiles implique la promotion de pratiques d'achat durables, la réutilisation des vêtements existants et le recyclage des textiles usagés pour minimiser la quantité de déchets textiles envoyés en décharge."
    },
    {
        mot: "Économie circulaire",
        recyclage: "L'économie circulaire des textiles vise à réduire, réutiliser et recycler les vêtements usagés pour créer un cycle de vie durable où les textiles sont continuellement réintroduits dans l'économie sans compromettre la qualité ou les performances."
    },
    {
        mot: "Mode durable",
        recyclage: "La mode durable encourage des pratiques de production et de consommation responsables, y compris le recyclage des textiles, pour minimiser l'impact environnemental de l'industrie de la mode et favoriser une utilisation plus efficace des ressources."
    },
    {
        mot: "Design écoresponsable",
        recyclage: "Le design écoresponsable dans l'industrie textile implique l'utilisation de matériaux recyclés, de techniques de production durables et de pratiques de recyclage pour créer des produits textiles qui réduisent l'empreinte environnementale de l'industrie de la mode."
    },
    {
        mot: "Réutilisation des textiles",
        recyclage: "La réutilisation des textiles consiste à transformer les vêtements usagés en nouveaux articles textiles, tels que des tapisseries, des sacs réutilisables ou des chiffons, prolongeant ainsi leur durée de vie utile et réduisant les déchets textiles."
    },
    {
        mot: "Recyclage de la laine",
        recyclage: "Le recyclage de la laine implique la collecte et le traitement des vêtements en laine usagés pour les transformer en nouvelles fibres de laine ou en produits recyclés, réduisant ainsi la quantité de déchets textiles et préservant les ressources naturelles."
    },
    {
        mot: "Réutilisation des chutes de tissu",
        recyclage: "La réutilisation des chutes de tissu dans l'industrie textile permet de minimiser les déchets de production en utilisant les chutes de tissu comme matière première pour créer de nouveaux produits, favorisant ainsi la durabilité et le recyclage des textiles."
    },
    {
        mot: "Recyclage des vêtements de sport",
        recyclage: "Le recyclage des vêtements de sport usagés permet de récupérer les matériaux techniques utilisés dans leur fabrication, tels que le polyester et le nylon, pour les transformer en nouveaux produits textiles ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des fibres synthétiques",
        recyclage: "Le recyclage des fibres synthétiques, telles que le polyester et le nylon, à partir de vêtements usagés permet de réduire la dépendance aux matières premières vierges et de minimiser l'impact environnemental de l'industrie textile."
    },
    {
        mot: "Recyclage des vêtements pour enfants",
        recyclage: "Le recyclage des vêtements pour enfants usagés permet de prolonger leur durée de vie utile et de réduire la quantité de déchets textiles envoyés en décharge, contribuant ainsi à une gestion plus durable des ressources."
    },
    {
        mot: "Éducation à la durabilité",
        recyclage: "L'éducation à la durabilité dans le domaine textile sensibilise les consommateurs aux impacts environnementaux de l'industrie de la mode et encourage des pratiques d'achat responsables, y compris le recyclage et la réutilisation des textiles."
    },
    {
        mot: "Recyclage des vêtements de luxe",
        recyclage: "Le recyclage des vêtements de luxe usagés permet de prolonger leur durée de vie utile et de réduire l'empreinte environnementale de l'industrie de la mode haut de gamme, en favorisant la réutilisation et le recyclage des textiles."
    },
    {
        mot: "Sensibilisation aux déchets textiles",
        recyclage: "La sensibilisation aux déchets textiles informe le public sur l'importance du recyclage des textiles et encourage des pratiques de consommation responsables pour réduire la quantité de déchets textiles envoyés en décharge."
    },
    {
        mot: "Recyclage des vêtements de travail",
        recyclage: "Le recyclage des vêtements de travail usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton ignifuge, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Réparation des vêtements",
        recyclage: "La réparation des vêtements usagés prolonge leur durée de vie utile et réduit la quantité de déchets textiles, en favorisant une approche plus durable de la mode et en minimisant l'impact environnemental de la production de nouveaux vêtements."
    },
    {
        mot: "Recyclage des vêtements de nuit",
        recyclage: "Le recyclage des vêtements de nuit usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton doux, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de travail",
        recyclage: "Le recyclage des vêtements de travail usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton ignifuge, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des uniformes scolaires",
        recyclage: "Le recyclage des uniformes scolaires usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester résistant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de sport",
        recyclage: "Le recyclage des vêtements de sport usagés permet de récupérer les matériaux techniques utilisés dans leur fabrication, tels que le polyester respirant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de voyage",
        recyclage: "Le recyclage des vêtements de voyage usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le nylon léger, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de nuit",
        recyclage: "Le recyclage des vêtements de nuit usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton doux, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de plage",
        recyclage: "Le recyclage des vêtements de plage usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester résistant à l'eau, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de yoga",
        recyclage: "Le recyclage des vêtements de yoga usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le spandex extensible, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de pluie",
        recyclage: "Le recyclage des vêtements de pluie usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le nylon imperméable, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de danse",
        recyclage: "Le recyclage des vêtements de danse usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le spandex flexible, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de mariage",
        recyclage: "Le recyclage des vêtements de mariage usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que la soie luxueuse, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de bureau",
        recyclage: "Le recyclage des vêtements de bureau usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton professionnel, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des sous-vêtements",
        recyclage: "Le recyclage des sous-vêtements usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton respirant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des maillots de bain",
        recyclage: "Le recyclage des maillots de bain usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le nylon résistant au chlore, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Vêtements de montagne",
        recyclage: "Le recyclage des vêtements de montagne usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester isolant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Vêtements de jardinage",
        recyclage: "Le recyclage des vêtements de jardinage usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton résistant à la saleté, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Vêtements de course",
        recyclage: "Le recyclage des vêtements de course usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester respirant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Vêtements de ski",
        recyclage: "Le recyclage des vêtements de ski usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le nylon imperméable, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Vêtements de vélo",
        recyclage: "Le recyclage des vêtements de vélo usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le spandex extensible, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de camping",
        recyclage: "Le recyclage des vêtements de camping usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester léger, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de pêche",
        recyclage: "Le recyclage des vêtements de pêche usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le nylon imperméable, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de cyclisme",
        recyclage: "Le recyclage des vêtements de cyclisme usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester respirant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de fitness",
        recyclage: "Le recyclage des vêtements de fitness usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le spandex extensible, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de loisirs",
        recyclage: "Le recyclage des vêtements de loisirs usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton confortable, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de golf",
        recyclage: "Le recyclage des vêtements de golf usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester résistant au vent, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de chasse",
        recyclage: "Le recyclage des vêtements de chasse usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton résistant aux déchirures, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de voyage",
        recyclage: "Le recyclage des vêtements de voyage usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le nylon léger, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de voile",
        recyclage: "Le recyclage des vêtements de voile usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le nylon imperméable, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de randonnée",
        recyclage: "Le recyclage des vêtements de randonnée usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester respirant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de jardinage",
        recyclage: "Le recyclage des vêtements de jardinage usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le coton résistant à la saleté, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de moto",
        recyclage: "Le recyclage des vêtements de moto usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le cuir durable, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Recyclage des vêtements de piste",
        recyclage: "Le recyclage des vêtements de piste usagés permet de récupérer les matériaux textiles spécifiques utilisés dans leur fabrication, tels que le polyester respirant, pour les transformer en nouveaux produits ou en matières premières recyclées."
    },
    {
        mot: "Épluchures de fruits",
        recyclage: "Les épluchures de fruits peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Épluchures de légumes",
        recyclage: "Les épluchures de légumes peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Marc de café",
        recyclage: "Le marc de café peut être composté pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de repas",
        recyclage: "Les restes de repas peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Pelures de banane",
        recyclage: "Les pelures de banane peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Coquilles d'œufs",
        recyclage: "Les coquilles d'œufs peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles mortes",
        recyclage: "Les feuilles mortes peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Paille",
        recyclage: "La paille peut être compostée pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Fumier",
        recyclage: "Le fumier peut être composté pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Brou de noix",
        recyclage: "Le brou de noix peut être composté pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Mauvaises herbes",
        recyclage: "Les mauvaises herbes peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles de thé",
        recyclage: "Les feuilles de thé peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles d'arbre",
        recyclage: "Les feuilles d'arbre peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Pépins de fruits",
        recyclage: "Les pépins de fruits peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Mousses",
        recyclage: "Les mousses peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Branches d'arbres",
        recyclage: "Les branches d'arbres peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Cosses de légumineuses",
        recyclage: "Les cosses de légumineuses peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles de maïs",
        recyclage: "Les feuilles de maïs peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Pépins de raisin",
        recyclage: "Les pépins de raisin peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Fanons de légumes",
        recyclage: "Les fanons de légumes peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Racines de légumes",
        recyclage: "Les racines de légumes peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Déchets de jardinage",
        recyclage: "Les déchets de jardinage peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Poussière de maison",
        recyclage: "La poussière de maison peut être compostée pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Pétales de fleurs",
        recyclage: "Les pétales de fleurs peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Marc de vin",
        recyclage: "Le marc de vin peut être composté pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Algues",
        recyclage: "Les algues peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles de jardin",
        recyclage: "Les feuilles de jardin peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Coquilles de fruits de mer",
        recyclage: "Les coquilles de fruits de mer peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de tonte de gazon",
        recyclage: "Les restes de tonte de gazon peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Aiguilles de pin",
        recyclage: "Les aiguilles de pin peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Paille de riz",
        recyclage: "La paille de riz peut être compostée pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Cosse de noix de coco",
        recyclage: "Les cosses de noix de coco peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Plantes fanées",
        recyclage: "Les plantes fanées peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Coquilles de noix",
        recyclage: "Les coquilles de noix peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Coquilles de graines",
        recyclage: "Les coquilles de graines peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de fruits",
        recyclage: "Les restes de fruits peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de légumes",
        recyclage: "Les restes de légumes peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de salade",
        recyclage: "Les restes de salade peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles de chou",
        recyclage: "Les feuilles de chou peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Épluchures d'agrumes",
        recyclage: "Les épluchures d'agrumes peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Marc de thé",
        recyclage: "Le marc de thé peut être composté pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Marc de cacao",
        recyclage: "Le marc de cacao peut être composté pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Épluchures de pommes de terre",
        recyclage: "Les épluchures de pommes de terre peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de pain",
        recyclage: "Les restes de pain peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Pelures d'oignon",
        recyclage: "Les pelures d'oignon peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de riz",
        recyclage: "Les restes de riz peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de pâtes",
        recyclage: "Les restes de pâtes peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de viande",
        recyclage: "Les restes de viande peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de poisson",
        recyclage: "Les restes de poisson peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de fromage",
        recyclage: "Les restes de fromage peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de yaourt",
        recyclage: "Les restes de yaourt peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles de thé",
        recyclage: "Les feuilles de thé peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Feuilles de salade",
        recyclage: "Les feuilles de salade peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Pelures de melon",
        recyclage: "Les pelures de melon peuvent être compostées pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Pépins de citrouille",
        recyclage: "Les pépins de citrouille peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Restes de thé",
        recyclage: "Les restes de thé peuvent être compostés pour produire de l'engrais naturel pour les plantes."
    },
    {
        mot: "Ordinateur",
        recyclage: "Les ordinateurs peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Téléphone portable",
        recyclage: "Les téléphones portables peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Tablette",
        recyclage: "Les tablettes peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Téléviseur",
        recyclage: "Les téléviseurs peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Imprimante",
        recyclage: "Les imprimantes peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Écran d'ordinateur",
        recyclage: "Les écrans d'ordinateur peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Clavier d'ordinateur",
        recyclage: "Les claviers d'ordinateur peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Souris d'ordinateur",
        recyclage: "Les souris d'ordinateur peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Carte mère",
        recyclage: "Les cartes mères peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Disque dur",
        recyclage: "Les disques durs peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Câbles",
        recyclage: "Les câbles peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Batterie",
        recyclage: "Les batteries peuvent être recyclées pour récupérer des matériaux précieux tels que le lithium, le nickel et le cobalt, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Casque audio",
        recyclage: "Les casques audio peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Enceinte",
        recyclage: "Les enceintes peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Lampe LED",
        recyclage: "Les lampes LED peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Électroménager",
        recyclage: "Les appareils électroménagers peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Circuit imprimé",
        recyclage: "Les circuits imprimés peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Console de jeux vidéo",
        recyclage: "Les consoles de jeux vidéo peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Appareil photo numérique",
        recyclage: "Les appareils photo numériques peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Câble HDMI",
        recyclage: "Les câbles HDMI peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Webcam",
        recyclage: "Les webcams peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Chargeur de téléphone",
        recyclage: "Les chargeurs de téléphone peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Câble USB",
        recyclage: "Les câbles USB peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Carte graphique",
        recyclage: "Les cartes graphiques peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Microphone",
        recyclage: "Les microphones peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Câble audio",
        recyclage: "Les câbles audio peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Écouteurs",
        recyclage: "Les écouteurs peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Écran LCD",
        recyclage: "Les écrans LCD peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Adaptateur secteur",
        recyclage: "Les adaptateurs secteur peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Télécommande",
        recyclage: "Les télécommandes peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Pile bouton",
        recyclage: "Les piles bouton peuvent être recyclées pour récupérer des matériaux précieux tels que le lithium, le zinc et l'argent, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Circuit imprimé",
        recyclage: "Les circuits imprimés peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Disque dur externe",
        recyclage: "Les disques durs externes peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Haut-parleur",
        recyclage: "Les haut-parleurs peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Ventilateur de PC",
        recyclage: "Les ventilateurs de PC peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Routeur",
        recyclage: "Les routeurs peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Caméra de sécurité",
        recyclage: "Les caméras de sécurité peuvent être recyclées pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    },
    {
        mot: "Modem",
        recyclage: "Les modems peuvent être recyclés pour récupérer des matériaux précieux tels que le cuivre, l'argent et l'or, ainsi que pour minimiser l'impact environnemental des déchets électroniques."
    }
];
export default explicationsData;

import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	megaMenu?: boolean;
	image?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() { }

	public screenWidth: any;
	public leftMenuToggle: boolean = false;
	public mainMenuToggle: boolean = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Pâtisserie', type: 'sub', megaMenu: true, active: false, children: [
				{
					title: 'Chocolats', type: 'sub', active: false, children: [
						{ path: '/pages/portfolio/grid/two', title: 'Pâte à glacer', type: 'link' },
						{ path: '/pages/portfolio/grid/three', title: 'Pâte à glacer Drops', type: 'link' },
						{ path: '/pages/portfolio/grid/four', title: 'Pâte à glacer Pépites', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/two', title: 'pâte à glacer Block', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'Pâte à glacer Batonnets', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'Chocolat de couverture', type: 'link' },
						{ path: '/pages/portfolio/masonry/full-width', title: 'Crème à tartiner', type: 'link' }
					]
				},
				{
					title: 'Pâtes', type: 'sub', active: false, children: [
						{ path: '/home/vegetable', title: 'Pâte à sucre', type: 'link' },
						{ path: '/home/watch', title: 'Pâte aromatisante', type: 'link' },
						{ path: '/home/furniture', title: 'Pâte de datte', type: 'link' }
						
					]
				},
				{
					title: 'Colorants', type: 'sub', active: false, children: [
						{ path: '/elements/theme/title', title: 'Colorant alimentaire en poudre', type: 'link' },
						{ path: '/elements/theme/collection-banner', title: 'Colorant alimentaire gel', type: 'link' },
						{ path: '/elements/theme/home-slider', title: 'Colorant alimentaire en liquide', type: 'link' }
						
					]
				},
				{
					title: 'Poudres', type: 'sub', active: false, children: [
						{ path: '/elements/product/slider', title: 'Poudre à crème', type: 'link' },
						{ path: '/elements/product/banners', title: 'Mix cake', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Levure chimique', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Allegro', type: 'link' },
						{ path: '/elements/product/multi-slider', title: 'Sucre glâce', type: 'link' }
					]
				},
				{
					title: 'Préparation', type: 'sub', active: false, children: [
						{ path: '/elements/product/slider', title: 'Crème fraiche', type: 'link' },
						{ path: '/elements/product/banners', title: 'Aromes', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Fondant', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Nappage', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Gilk', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Glucose', type: 'link' },
						{ path: '/elements/product/multi-slider', title: 'Sauce dessert', type: 'link' }
					]
				},
				{
					title: 'Décoration', type: 'sub', active: false, children: [
						{ path: '/elements/product/slider', title: 'Perle callebeaut', type: 'link' },
						{ path: '/elements/product/banners', title: 'Vermicelle', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Donia', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Nacré alimentaire', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Fleurs alimentaires', type: 'link' },
						{ path: '/elements/product/multi-slider', title: 'Spray', type: 'link' }
					]
				},
				{
					title: 'Margarines', type: 'sub', active: false, children: [
						{ path: '/elements/product/slider', title: 'Spécial croissant', type: 'link' },
						{ path: '/elements/product/banners', title: 'Mille feuilles', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Délicieuse', type: 'link' },
						{ path: '/elements/product/tabs', title: 'Voluma', type: 'link' }
						
					]
				}
			]
		},
		{
			title: 'Café', type: 'sub', megaMenu: true, active: false, children: [
				{
					title: 'Café', type: 'sub', active: false, children: [
						{ path: '/pages/portfolio/grid/two', title: 'Café grain', type: 'link' },
						{ path: '/pages/portfolio/grid/three', title: 'Café grain silver', type: 'link' },
						{ path: '/pages/portfolio/grid/four', title: 'Café grain aromatisé', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/two', title: 'Café expresse', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'Filtre mélange', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'Filtre pur', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'Turc mélange', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'Turc pur', type: 'link' },
						{ path: '/pages/portfolio/masonry/full-width', title: 'Turc hill', type: 'link' }
					]
				},
				{
					title: 'Lait', type: 'sub', active: false, children: [
						{ path: '/home/vegetable', title: 'Lait en poudre', type: 'link' },
						{ path: '/home/watch', title: 'Lait concentré', type: 'link' }
						
						
					]
				},
				{
					title: 'Nescafé', type: 'sub', active: false, children: [
						{ path: '/elements/theme/title', title: 'Nescafé', type: 'link' },
						{ path: '/elements/theme/collection-banner', title: 'Nespresso', type: 'link' }
						
						
					]
				},
				
				
				
				
			]
		},
		{
			title: 'Restaurant', type: 'sub', megaMenu: true, active: false, children: [
				{
					title: 'Sauce', type: 'sub', active: false, children: [
						{ path: '/pages/portfolio/grid/two', title: 'Tomate concentré', type: 'link' },
						{ path: '/pages/portfolio/grid/three', title: 'Harissa', type: 'link' },
						{ path: '/pages/portfolio/grid/four', title: 'Ketcheup', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/two', title: 'Sauce pizza', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'Mayonnaise', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'Thon', type: 'link' }
						
					]
				},
				{
					title: 'Frommage', type: 'sub', active: false, children: [
						{ path: '/home/vegetable', title: 'Lait en poudre', type: 'link' },
						{ path: '/home/watch', title: 'Lait concentré', type: 'link' }
						
						
					]
				},
				{
					title: 'Huile', type: 'sub', active: false, children: [
						{ path: '/elements/theme/title', title: 'Huile végétal', type: 'link' },
						{ path: '/elements/theme/title', title: '', type: 'link' },
						{ path: '/elements/theme/collection-banner', title: 'Huile de maîs', type: 'link' }
						
						
					]
				},
				
				
				
				
			]
		},
		{
			title: 'Accessoires', type: 'sub', megaMenu: true, active: false, children: [
				{
					title: 'Pâtisserie', type: 'sub', active: false, children: [
						{ path: '/pages/portfolio/grid/two', title: 'Moules', type: 'link' },
						{ path: '/pages/portfolio/grid/three', title: 'Cerceaux', type: 'link' },
						{ path: '/pages/portfolio/grid/four', title: 'Spatules', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/two', title: 'Pôches', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'Douilles', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'Tenu de travail', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'Autres', type: 'link' }
						
					]
				},
				{
					title: 'Café', type: 'sub', active: false, children: [
						{ path: '/home/vegetable', title: 'Chicha', type: 'link' },
						{ path: '/home/vegetable', title: 'Accessoires chicha', type: 'link' },
						{ path: '/home/vegetable', title: 'Théières', type: 'link' },
						{ path: '/home/vegetable', title: 'Tasse à café', type: 'link' },
						{ path: '/home/vegetable', title: 'Sandrier', type: 'link' },
						{ path: '/home/vegetable', title: 'Bouilloire', type: 'link' },
						{ path: '/home/watch', title: 'Autres', type: 'link' }
						
						
					]
				},
				{
					title: 'Restaurant', type: 'sub', active: false, children: [
						{ path: '/elements/theme/title', title: 'Plateau', type: 'link' },
						{ path: '/elements/theme/title', title: 'Balance de cuisine', type: 'link' },
						{ path: '/elements/theme/title', title: 'Couteau', type: 'link' },
						{ path: '/elements/theme/collection-banner', title: 'Papier cuisson', type: 'link' },
						{ path: '/elements/theme/collection-banner', title: 'Autres', type: 'link' }
						
						
					]
				},
				
				
				
				
			]
		},
		{
			title: 'Emballage', type: 'sub', megaMenu: true, active: false, children: [
				{
					title: 'Pâtisserie', type: 'sub', active: false, children: [
						{ path: '/pages/portfolio/grid/two', title: 'Boite à gâteau', type: 'link' },
						{ path: '/pages/portfolio/grid/three', title: 'Polystyrèine', type: 'link' , badge: true, badgeText: 'Plus' },
						{ path: '/pages/portfolio/grid/four', title: 'Barquettes', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/two', title: 'Caissettes', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'Sous tarte', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/three', title: 'Talonettes', type: 'link' },
						{ path: '/pages/portfolio/masonry/grid/four', title: 'Autres', type: 'link' }
						
					]
				},
				{
					title: 'Café', type: 'sub', active: false, children: [
						{ path: '/home/vegetable', title: 'Gobelets', type: 'link' , badge: true, badgeText: 'Plus' },
						{ path: '/home/vegetable', title: 'Agitateurs', type: 'link' },
						{ path: '/home/vegetable', title: 'Pailles', type: 'link' },
						{ path: '/home/vegetable', title: 'Cuillères', type: 'link' },
						
						{ path: '/home/watch', title: 'Autres', type: 'link' }
						
						
					]
				},
				{
					title: 'Restaurant', type: 'sub', active: false, children: [
						{ path: '/elements/theme/title', title: 'Compartiments', type: 'link' },
						{ path: '/elements/theme/title', title: 'Barquette Portion', type: 'link' },
						{ path: '/elements/theme/title', title: 'Pochettes', type: 'link' },
						
						{ path: '/elements/theme/collection-banner', title: 'Autres', type: 'link' }
						
						
					]
				},
				{
					title: 'Divers', type: 'sub', active: false, children: [
						{ path: '/home/vegetable', title: 'Sachets', type: 'link' , badge: true, badgeText: 'Plus' },
						{ path: '/home/vegetable', title: 'Film étirable', type: 'link' },
						{ path: '/home/vegetable', title: 'Aluminium', type: 'link' },
						{ path: '/home/vegetable', title: 'Bobinette de caisse', type: 'link' },
						
						{ path: '/home/watch', title: 'Autres', type: 'link' }
						
						
					]
				},
				
				
				
			]
		},
		
		{
			title: 'Cérémonie', type: 'sub', active: false, children: [
				{
					title: 'Anniverssaire', type: 'sub', active: false, children: [
						{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
						{ path: '/pages/cart', title: 'cart', type: 'link' },
						{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
						{ path: '/pages/login', title: 'login', type: 'link' },
						{ path: '/pages/register', title: 'register', type: 'link' },
						{ path: '/pages/contact', title: 'contact', type: 'link' },
						{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
						{ path: '/pages/profile', title: 'profile', type: 'link' },
						{ path: '/pages/checkout', title: 'checkout', type: 'link' },
					]
				},
				{
					title: 'Mariage', type: 'sub', active: false, children: [
						{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
						{ path: '/pages/cart', title: 'cart', type: 'link' },
						{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
						{ path: '/pages/login', title: 'login', type: 'link' },
						{ path: '/pages/register', title: 'register', type: 'link' },
						{ path: '/pages/contact', title: 'contact', type: 'link' },
						{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
						{ path: '/pages/profile', title: 'profile', type: 'link' },
						{ path: '/pages/checkout', title: 'checkout', type: 'link' },
					]
				},
				{
					title: 'Naissance', type: 'sub', active: false, children: [
						{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
						{ path: '/pages/cart', title: 'cart', type: 'link' },
						{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
						{ path: '/pages/login', title: 'login', type: 'link' },
						{ path: '/pages/register', title: 'register', type: 'link' },
						{ path: '/pages/contact', title: 'contact', type: 'link' },
						{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
						{ path: '/pages/profile', title: 'profile', type: 'link' },
						{ path: '/pages/checkout', title: 'checkout', type: 'link' },
					]
				},
				{
					title: 'Cadeau', type: 'sub', active: false, children: [
						{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
						{ path: '/pages/cart', title: 'cart', type: 'link' },
						{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
						{ path: '/pages/login', title: 'login', type: 'link' },
						{ path: '/pages/register', title: 'register', type: 'link' },
						{ path: '/pages/contact', title: 'contact', type: 'link' },
						{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
						{ path: '/pages/profile', title: 'profile', type: 'link' },
						{ path: '/pages/checkout', title: 'checkout', type: 'link' },
					]
				},
				{
					title: 'Soutenance', type: 'sub', active: false, children: [
						{ path: '/pages/wishlist', title: 'wishlist', type: 'link' },
						{ path: '/pages/cart', title: 'cart', type: 'link' },
						{ path: '/pages/dashboard', title: 'dashboard', type: 'link' },
						{ path: '/pages/login', title: 'login', type: 'link' },
						{ path: '/pages/register', title: 'register', type: 'link' },
						{ path: '/pages/contact', title: 'contact', type: 'link' },
						{ path: '/pages/forget/password', title: 'forget-password', type: 'link' },
						{ path: '/pages/profile', title: 'profile', type: 'link' },
						{ path: '/pages/checkout', title: 'checkout', type: 'link' },
					]
				},
				
				
			]
		},
		
	];

	LEFTMENUITEMS: Menu[] = [
		{
			title: 'clothing', type: 'sub', megaMenu: true, active: false, children: [
			  {
				  title: 'mens fashion',  type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'top',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'shirts',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' }
				  ]
			  },
			  {
				  title: 'women fashion',  type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'dresses',  type: 'link' },
					  { path: '/home/fashion', title: 'skirts',  type: 'link' },
					  { path: '/home/fashion', title: 'westarn wear',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom',  type: 'link' },
					  { path: '/home/fashion', title: 'ethic wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'sports wear',  type: 'link' },
					  { path: '/home/fashion', title: 'bottom wear',  type: 'link' }
				  ]
			  },
			]
		},
		{
			title: 'bags', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'shopper bags', type: 'link' },
			  { path: '/home/fashion', title: 'laptop bags', type: 'link' },
			  { path: '/home/fashion', title: 'clutches', type: 'link' },
			  {
				  path: '/home/fashion', title: 'purses', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'purses',  type: 'link' },
					  { path: '/home/fashion', title: 'wallets',  type: 'link' },
					  { path: '/home/fashion', title: 'leathers',  type: 'link' },
					  { path: '/home/fashion', title: 'satchels',  type: 'link' }
				  ]
			  },
			]
		},
		{
			title: 'footwear', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'sport shoes', type: 'link' },
			  { path: '/home/fashion', title: 'formal shoes', type: 'link' },
			  { path: '/home/fashion', title: 'casual shoes', type: 'link' }
			]
		},
		{
			path: '/home/fashion', title: 'watches', type: 'link'
		},
		{
			title: 'Accessories', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'fashion jewellery', type: 'link' },
			  { path: '/home/fashion', title: 'caps and hats', type: 'link' },
			  { path: '/home/fashion', title: 'precious jewellery', type: 'link' },
			  {
				  path: '/home/fashion', title: 'more..', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'necklaces',  type: 'link' },
					  { path: '/home/fashion', title: 'earrings',  type: 'link' },
					  { path: '/home/fashion', title: 'rings & wrist wear',  type: 'link' },
					  {
						  path: '/home/fashion', title: 'more...',  type: 'link', active: false, children: [
							  { path: '/home/fashion', title: 'ties',  type: 'link' },
							  { path: '/home/fashion', title: 'cufflinks',  type: 'link' },
							  { path: '/home/fashion', title: 'pockets squares',  type: 'link' },
							  { path: '/home/fashion', title: 'helmets',  type: 'link' },
							  { path: '/home/fashion', title: 'scarves',  type: 'link' },
							  {
								  path: '/home/fashion', title: 'more...',  type: 'link', active: false, children: [
									  { path: '/home/fashion', title: 'accessory gift sets',  type: 'link' },
									  { path: '/home/fashion', title: 'travel accessories',  type: 'link' },
									  { path: '/home/fashion', title: 'phone cases',  type: 'link' }
								  ]
							  },
						]
					  }
				  ]
			  },
			]
		},
		{
			path: '/home/fashion', title: 'house of design', type: 'link'
		},
		{
			title: 'beauty & personal care', type: 'sub', active: false, children: [
			  { path: '/home/fashion', title: 'makeup', type: 'link' },
			  { path: '/home/fashion', title: 'skincare', type: 'link' },
			  { path: '/home/fashion', title: 'premium beaty', type: 'link' },
			  {
				  path: '/home/fashion', title: 'more..', type: 'link', active: false, children: [
					  { path: '/home/fashion', title: 'fragrances',  type: 'link' },
					  { path: '/home/fashion', title: 'luxury beauty',  type: 'link' },
					  { path: '/home/fashion', title: 'hair care',  type: 'link' },
					  { path: '/home/fashion', title: 'tools & brushes',  type: 'link' }
				  ]
			  },
			]
		},
		{
			path: '/home/fashion', title: 'home & decor', type: 'link'
		},
		{
			path: '/home/fashion', title: 'kitchen', type: 'link'
		}
	];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);

}

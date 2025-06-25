export const seo = `
	...,
	metaImage{
		asset->
	}
`;

export const figure = `
	...,
	image{
		asset->
	},
	caption,
	link->{
		_type,
		slug
	}
`;

export const blockContent = `
	...,
	en[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			},
		},

	},
	fr[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			},

		},

	}
`;

export const media = `
	...,
	_type == 'figure' => {
		...,
		image{
			asset->
		},
		project->{
		  title,
		}
	},
	_type == 'videoMux' => {
		...
	}
`;

const introUI = `
	_type ==  'introUI' => {
		...,
		items[]{
			...,
			asset->
		}
	}
`;

const projectsFeaturedUI = `
	_type == 'projectsFeaturedUI' => {
		...,
		items[]{
			_key,
			_type,
			slug,
			title,
			project->{
				_type,
				slug,
				title
			},
			artist->{
				name,
				tag->{
					title
				}
			},
			media[]{
				_type,
				image{
					asset->
				}
			}
		}
	}
`;

const artistsGridUI = `
	_type == 'artistsGridUI' => {
		...,
		items[]{
			...,
			tag->{
				title
			},
			items[]->{
				_type,
				slug,
				name,
				imageCover{
					asset->
				},
			}
		}
	}
`;

const editionsUI = `
	_type == 'editionsUI' => {
		...,
		title,
		image{
			...,
			image{
				asset->
			},
			caption,
			link->{
				_type,
				slug
			}
		},
		intro{
			${blockContent}
		},
		images[]{
			...,
			image{
				asset->
			},
			caption,
			link->{
				_type,
				slug
			}
		},
		text{
			${blockContent}
		}
	}
`;

const productionsUI = `
	_type == 'productionsUI' => {
		...,
		items[]{
			...,
			image{
				asset->
			}
		},
		featured{
			...,
			image{
				asset->
			}
		}
	}
`;

export const productionItem = `
	_type == 'productionItem' => {
		...,
		image{
			asset->
		}
	}
`;

export const modules = `
	...,
	${introUI},
	${artistsGridUI},
	${editionsUI},
	${productionsUI},
	${projectsFeaturedUI}
`;

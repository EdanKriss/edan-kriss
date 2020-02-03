import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';

const tileData = [
    {
      img: require('Images/projects/tiny-recipes/login.png'),
      title: 'Gallery 1',
      author: 'author',
      cols: .66,
    },
    {
      img: require('Images/projects/tiny-recipes/recipe_list.png'),
      title: 'Gallery 2',
      author: 'author',
      cols: .66,
    },
    {
      img: require('Images/projects/tiny-recipes/device_permission.png'),
      title: 'Gallery 3',
      author: 'author',
      cols: .67,
    },
    {
      img: require('Images/projects/tiny-recipes/photo_picker.png'),
      title: 'Gallery 4',
      author: 'author',
      cols: .66,
    },
    {
      img: require('Images/projects/tiny-recipes/test_compression.png'),
      title: 'Testing compression libraries',
      author: 'The raw photos taken by newer cameras were far too large for the Flutter image cache, so I tested various libraries. I managed to achieve compression by a factor of 10 without much noticible loss.',
      cols: .66,
    }
  ];

function ImageGridList(props) {
	return (
		<div>
			{/* <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={450}> */}
				<GridList cellHeight={320}>
					{tileData.map(tile => (
						<GridListTile key={tile.img}  cols={tile.cols}>
							<img className="tiny-recipes-screenshot" src={tile.img} alt={tile.title} />
                            <GridListTileBar 
                                title={tile.title} 
                                subtitle={<span>by: {tile.author}</span>}
								// actionIcon={<IconButton> <i className="zmdi zmdi-share text-white"></i> </IconButton>} 
                            />
						</GridListTile>
					))}
				</GridList>
			{/* </Scrollbars> */}
		</div>
	);
}

export default ImageGridList;

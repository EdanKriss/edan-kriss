import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core';

const rootStyle = (
    window.innerWidth > 440 && 
    (window.innerWidth > window.innerHeight)
) ? {
    height: "58vh!important",
    width: "29vh!important"
} : {
    height: "152vw!important",
    width: "76vw!important"
};
const Tile = withStyles({
    root: rootStyle
})(GridListTile);
const TileBar = withStyles({
    root: {
        backgroundColor: "rgba(0,0,0,0.8)",
        fontWeight: 900
    },
    title: {
        fontSize: "1.33rem"
    },
    subtitle: {
        fontSize: "1rem"
    }
})(GridListTileBar);

const tileData = [
    {
      img: require('Images/projects/tiny-recipes/login.png'),
      title: 'Login Page',
      text: 'Passwords are hashed and stored in MongoDB',
      cols: .66,
    },
    {
      img: require('Images/projects/tiny-recipes/recipe_list.png'),
      title: 'Recipe List',
      text: 'Our data model revolves around recipes!',
      cols: .66,
    },
    {
      img: require('Images/projects/tiny-recipes/device_permission.png'),
      title: 'Platform-agnostic code',
      text: 'Flutter widgets dont care what the device is',
      cols: .67,
    },
    {
      img: require('Images/projects/tiny-recipes/photo_picker.png'),
      title: 'Image picker',
      text: 'High level API for common tasks',
      cols: .66,
    },
    {
      img: require('Images/projects/tiny-recipes/test_compression.png'),
      title: 'Testing compression',
      text: 'Notice the poor color of some libraries.',
      cols: .66,
    }
  ];

function ImageGridList(props) {
	return (
		<div>
				<GridList >
					{tileData.map(tile => (
						<Tile key={tile.img}>
						{/* <Tile key={tile.img}  cols={(window.innerWidth > 750) ? 0.66 : 1 } > */}
						{/* <GridListTile key={tile.img}  cols={tile.cols}> */}
							<img className="tiny-recipes-screenshot" src={tile.img} alt={tile.title} />
                            {/* <GridListTileBar  */}
                            <TileBar 
                                title={tile.title} 
                                subtitle={<span>{tile.text}</span>}
                            />
						</Tile>
						// </GridListTile>
					))}
				</GridList>
		</div>
	);
}

export default ImageGridList;

class Arena{
    constructor(color,level){
        ground = createSprite(windowWidth,windowHeight,windowWidth,20);
        ground.shapeColor = color;

        text("level " + level);
        
    }
}
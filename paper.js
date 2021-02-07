class paper extends BassClass{

    cinstructor(x,y,w,h)
    {
        var option={
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        world.add(world, this.body);

    }
    Display()
    {
        var groundPos=this.body.position;

        Push()
        transleta(groundpo.x, groundpos.y);
        rectMode(CENTR)
        strokeWeight(4);
        Fill(128,128,128)
        rect(0,0,this.x,this.h);
        Pop()
        
    

        }

    }
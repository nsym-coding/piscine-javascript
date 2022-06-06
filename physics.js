function getAcceleration(x){
    if (x.f && x.m){
        return x.f/x.m
    }else if (x.Δv && x.Δt){
        return x.Δv / x.Δt
    }else if (x.d && x.t){
        return (x.d*2)/ x.t**2
    }else{ 
        return "impossible"
    }

}
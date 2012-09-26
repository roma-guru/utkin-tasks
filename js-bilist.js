function List(capacity) {
        this.capacity = capacity;
        this.b = [];
        this.v = [];
        this.f = [];
        this.free = 0;
        this.last = -1;
		this.first = -1;
        for (var i=0; i<capacity; i++) {
            this.f[i] = i+1;
        }
        this.f[capacity-1] = -1;
        this.b[0] = -1;

        this.add = function(val) {
			if (this.free == -1) throw "No space";
            this.v[this.free] = val;
            this.b[this.free] = this.last;            
            if (this.last != -1) {
                this.f[this.last] = this.free;
            }
			this.last = this.free;
			this.f[this.free] = -1;
            this.free = this.f[this.free];			
			if (this.first == -1) this.first = 0;
        };

        this.remove_by_index = function(index) { 
		
            if (index==-1) return "Not found";
			
            if (this.b[index] >=0 ) {
                this.f[this.b[index]] = this.f[index];
            }
            if (this.f[index] >= 0) {
                this.b[this.f[index]] = this.b[index];
            }
            this.f[index] = this.free;
            this.free = index;

            if (index == this.last) {
                this.last = this.b[this.last];
            }
			
			if (index== this.first) {
				this.first = this.f[this.first];
			}
        };
		
		this.remove_by_val = function(val) {
			remove(find(val));
		}
        this.find = function(val) {
            var i = this.first;
            while (i>=0 && this.v[i] != val) {
                i = this.f[i];
            }
            return i;
        };
    }

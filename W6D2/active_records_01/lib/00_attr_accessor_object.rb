class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...
    names.each do |name|
  
      define_method("#{name}".to_sym) {self.instance_variable_get("@#{name}")}

      define_method("#{name}=".to_sym) { |value| self.instance_variable_set("@#{name}", value)}

    end

  end
end

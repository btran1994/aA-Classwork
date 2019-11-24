require_relative 'db_connection'
require 'active_support/inflector'

# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # ...
    if !@columns
      cols = DBConnection.execute2(<<-SQL).first
          SELECT
            *
          FROM
            #{table_name}
        SQL

      @columns = cols.map { |column| column.to_sym}
    end
  end

  def self.finalize!
     self.columns.each do |ele|
  
      define_method(ele) {self.attributes[ele]}

      define_method("#{ele}=".to_sym) { |value| self.attributes[ele] = value}

    end
  end

  def self.table_name=(table_name)
    # ...
    @table_name = table_name
  end

  def self.table_name
    # ...
    @table_name ||= self.to_s.tableize
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
  end

  def attributes
    # ...
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end

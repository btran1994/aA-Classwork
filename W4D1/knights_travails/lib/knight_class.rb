require_relative "./00_tree_node.rb"

class KnightPathFinder

    attr_reader :root_node, :considered_positions
    
    POSSIBLE = [
        [-2, -1],
        [-2, 1],
        [2, -1],
        [2, 1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2]
    ]
    
    def initialize(pos)
        @pos = pos
        @root_node = PolyTreeNode.new(@pos)
        @considered_positions = [pos]
        build_move_tree
    end

    def self.valid_moves(pos)
        valids = []
        POSSIBLE.each do |pair|
            x, y = (pos[0]+ pair[0]), (pos[1] + pair[1])

            if x >= 0 && x <= 7 && y >= 0 && y <= 7
                valids << [x,y]
            end
        end
        valids #
    end

    def new_move_positions(pos)
        all_possible = KnightPathFinder.valid_moves(pos) #<- returns valid array
        new_valid = all_possible - @considered_positions 
        @considered_positions += new_valid
        new_valid 
    end

    def build_move_tree
        queue = []
        queue << self.root_node
        
        until queue.empty?
            node = queue.shift
            # if node.value == target
            #     return node
            # end
            moves = new_move_positions(node.value)
            moves.each do |move|
                child = PolyTreeNode.new(move)
                child.parent = node
                queue << child
               
            end
        end
        nil
    end

    def trace_path_back(node)
        path = []
        until node.value == root_node.value
            path.unshift(node.value)
            node = node.parent
        end
        path.unshift(node.value)
        path
    end

    def find_path(target_pos)
        queue = []
        queue << self.root_node
       
        until queue.empty?
            node = queue.shift
            if node.value == target_pos
                return self.trace_path_back(node)
            end
            queue += node.children
        end
       nil
    end
  
end
